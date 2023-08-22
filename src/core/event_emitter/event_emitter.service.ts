import { Injectable } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';

@Injectable()
export class EventEmitterService {
    constructor(private readonly eventEmitter: EventEmitter2) {}

    userBlocked(userName: string) {
        try {
            this.eventEmitter.emit('user.blocked', userName);
        } catch (error) {
            throw new Error(error.toString());
        }
    }
}
