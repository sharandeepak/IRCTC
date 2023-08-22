import { Injectable } from '@nestjs/common';
import { CacheRepository } from './cache.repo';

@Injectable()
export class CacheService {
    constructor(private readonly cacheRepo: CacheRepository) {}
    async set(key: string, value: string): Promise<string> {
        try {
            let result: string = await this.cacheRepo.set(key, value);
            return result;
        } catch (error) {
            throw new Error(error.toString());
        }
    }

    async setWithExpiry(key: string, value: string, timeInSec: number): Promise<string> {
        try {
            let result: string = await this.cacheRepo.setWithExpiry(key, value, timeInSec);
            return result;
        } catch (error) {
            throw new Error(error.toString());
        }
    }

    async get(key: string): Promise<string> {
        try {
            const value: string = await this.cacheRepo.get(key);
            return value;
        } catch (error) {
            throw new Error(error.toString());
        }
    }

    async exists(key: string): Promise<number> {
        try {
            const result: number = await this.cacheRepo.exists(key);
            return result;
        } catch (error) {
            throw new Error(error.toString());
        }
    }

    async incr(key: string): Promise<number> {
        try {
            const value: number = await this.cacheRepo.incr(key);
            return value;
        } catch (error) {
            throw new Error(error.toString());
        }
    }

    async decr(key: string): Promise<number> {
        try {
            const value: number = await this.cacheRepo.decr(key);
            return value;
        } catch (error) {
            throw new Error(error.toString());
        }
    }
    async decrBy(key: string, numberr: number): Promise<number> {
        try {
            const value: number = await this.cacheRepo.decrBy(key, numberr);
            return value;
        } catch (error) {
            throw new Error(error.toString());
        }
    }

    async delete(key: string): Promise<number> {
        try {
            const result: number = await this.cacheRepo.delete(key);
            return result;
        } catch (error) {
            throw new Error(error.toString());
        }
    }
}
