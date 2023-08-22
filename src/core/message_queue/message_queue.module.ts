import { Module } from '@nestjs/common';
import { BullMqService } from './message_queue.service';

@Module({
    providers: [BullMqService],
    exports: [BullMqService],
})
export class MessageQueueModule {}  
