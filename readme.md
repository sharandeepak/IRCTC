# 🚆 IRCTC — Railway Ticket Reservation System

A production-style NestJS + TypeScript backend for railway ticket booking. Integrates:

* **Postgres** — source of truth (users, trains, bookings, payments)
* **Redis** — caching, distributed locks, ephemeral seat states
* **BullMQ** — background jobs (confirm payment, notifications, re-indexing)
* **OpenSearch** — fast search for stations / trains / bookings

This README covers the architecture, data flow, repo structure, and how to run/extend the system.

---

### Table of Contents

* Overview & Tech Stack
* High-Level Architecture
* Core Booking Flow
* Repo Structure
* Environment Variables
* Run Locally
* Operational Notes
* Contributing

---

## Overview

* **Framework**: NestJS + TypeScript (97.8% TS)
* **Infra**: Postgres · Redis · BullMQ · OpenSearch
* **Entry points**: `src/main.ts`, `src/app.module.ts`, `src/app.service.ts`

---

## Architecture

```
Client → NestJS API → Postgres (primary DB)
                  ↘ Redis (cache + locks) ←→ BullMQ (workers)
                  ↘ OpenSearch (search/indexing)
```

* Postgres: canonical booking data w/ transactions
* Redis: cache seat availability, prevent double booking via locks
* BullMQ: async tasks → confirmation, notifications, re-indexing
* OpenSearch: sub-50ms search (stations/trains/bookings)

---

## Core Booking Flow

**1. API request:** validate → check Redis cache → acquire lock → Postgres hold
**2. Worker job (async):** confirm payment → final DB update → update Redis + OpenSearch → send SMS/email
**Search:** direct to OpenSearch, fallback to Postgres if deeper joins needed
**Cron jobs:** cleanup expired holds, re-index, reconciliations

---

## Repo Structure

```
config/      env + config loader
models/      database entities
src/
  app.module.ts  DI + infra wiring
  main.ts        bootstrap HTTP
  core/          Postgres, Redis, BullMQ, OpenSearch clients
  modules/       feature modules (auth, trains, bookings, etc.)
```

---

## Environment Variables (essentials)

```
APP_PORT=3000
POSTGRES_* / REDIS_*
OPENSEARCH_NODE / OPENSEARCH_USERNAME / OPENSEARCH_PASSWORD
JWT_SECRET
QUEUE_CONCURRENCY
```

---

## Local Development

```bash
npm install
docker-compose up -d  # postgres + redis + opensearch (optional)
npm run start:dev     # API
npm run start:worker  # BullMQ workers
```

---

## Operational Practices

* Use **DB transactions + Redis locks** for seat consistency
* **Workers must be idempotent** (no double confirmations)
* Monitor **BullMQ queue health**, Redis memory, OpenSearch cluster
* Automate backups for Postgres; treat Redis as ephemeral

---
