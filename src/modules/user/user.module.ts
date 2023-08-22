import { Module } from '@nestjs/common';
import { UsersService } from './user.service';
import { UserController } from './user.controller';
import { UserRepository } from './repository/user.repository';
import { DatabaseModule } from 'src/core/database/database.module';
import { CacheModule } from 'src/core/cache/cache.module';
import { EventEmitterModule2 } from 'src/core/event_emitter/event_emitter.module';
import { EventEmitterModule } from '@nestjs/event-emitter';

@Module({
    controllers: [UserController],
    providers: [UsersService, UserRepository],
    imports: [DatabaseModule, CacheModule, EventEmitterModule2, EventEmitterModule.forRoot()]
})
export class UsersModule {}
