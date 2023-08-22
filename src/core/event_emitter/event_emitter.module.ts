import { Module } from '@nestjs/common';
import { EventEmitterService } from './event_emitter.service';
import { EventEmitterModule } from '@nestjs/event-emitter';

@Module({
    providers: [EventEmitterService],
    exports: [EventEmitterService]
})
export class EventEmitterModule2 {}
