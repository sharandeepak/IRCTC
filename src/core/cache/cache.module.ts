import { RedisModule } from '@nestjs-modules/ioredis';
import { Module } from '@nestjs/common';

@Module({
    imports: [
        RedisModule.forRootAsync({
            useFactory: () => ({
                config: {
                    url: 'redis://localhost:6379'
                }
            })
        })
    ]
})
export class CacheModule {}
