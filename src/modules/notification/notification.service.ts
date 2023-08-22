import { OnEvent } from '@nestjs/event-emitter';
import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationService {
    @OnEvent('user.blocked')
    async userBlockedNotification(userName: string) {
        console.log('user: '+userName + 'is blocked for 5 minutes');
    }
}