import { RedisModule } from '@nestjs-modules/ioredis';
import { Module } from '@nestjs/common';
import { CacheService } from './cache.service';
import { CacheRepository } from './cache.repo';

@Module({
    imports: [
        RedisModule.forRootAsync({
            useFactory: () => ({
                config: {
                    url: 'redis://localhost:6379'
                }
            })
        })
    ],
    providers: [CacheService, CacheRepository],
    exports: [CacheService]
})
export class CacheModule {}
