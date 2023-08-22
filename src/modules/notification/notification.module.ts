import { Module } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { EventEmitterModule } from '@nestjs/event-emitter';

@Module({
    providers: [NotificationService],
    exports: [NotificationService],
    imports: [EventEmitterModule.forRoot()]
})
export class NotificationModule {}
