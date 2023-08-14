import { Module } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { PaymentRepository } from './repository/payment.repository';
import { PaymentController } from './controller/payment.controller';
import { DatabaseModule } from 'src/core/database/database.module';

@Module({
  controllers: [PaymentController],
  providers: [PaymentService, PaymentRepository],
  imports: [DatabaseModule]
})
export class PaymentModule {}
