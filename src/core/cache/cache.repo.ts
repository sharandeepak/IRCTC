import { InjectRedis } from "@nestjs-modules/ioredis";
import Redis from "ioredis";

export class CacheRepository {
    constructor(@InjectRedis() private readonly redis: Redis) {}

    async set(key: string, value: string): Promise<string> {
        try {
            const result = await this.redis.set(key, value);
            return result;
        } catch (error) {
            throw new Error(error.toString());
        }
    }

    async setWithExpiry(key: string, value: string, timeInSec: number): Promise<string> {
        try {
            const result: string = await this.redis.set(key, value, 'EX', timeInSec);
            return result;
        } catch (error) {
            throw new Error(error.toString());
        }
    }

    async get(key: string): Promise<string> {
        try {
            const value: string = await this.redis.get(key);
            return value;
        } catch (error) {
            throw new Error(error.toString());
        }
    }

    async exists(key: string): Promise<number> {
        try {
            const result: number = await this.redis.exists(key);
            return result;
        } catch (error) {
            throw new Error(error.toString());
        }
    }

    async incr(key: string): Promise<number> {
        try {
            const value: number = await this.redis.incr(key);
            return value;
        } catch (error) {
            throw new Error(error.toString());
        }
    }

    async decr(key: string): Promise<number> {
        try {
            const value: number = await this.redis.decr(key);
            return value;
        } catch (error) {
            throw new Error(error.toString());
        }
    }

    async decrBy(key: string, numberr: number): Promise<number> {
        try {
            const value: number = await this.redis.decrby(key, numberr);
            return value;
        } catch (error) {
            throw new Error(error.toString());
        }
    }

    async delete(key: string): Promise<number> {
        try {
            const result = await this.redis.del(key);
            return result;
        } catch (error) {
            throw new Error(error.toString());
        }
    }
}