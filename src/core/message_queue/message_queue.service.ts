// src/bullmq/bullmq.service.ts
import {Injectable } from '@nestjs/common';
import { Job, Queue, Worker } from 'bullmq';


@Injectable()
export class BullMqService {
    private readonly queue: Queue;

    constructor() {
        this.queue = new Queue("my-queue");
        const worker = new Worker("my-queue", this.processJob.bind(this));
    }

    async addJob(data: any): Promise<Job> {
        const job: Job = await this.queue.add("my-queue", data);
        return job;
    }

    private async processJob(job: Job): Promise<void> {
        console.log('Processing job:', job.data);
    }
}
