import { Module } from '@nestjs/common';
import { UsersService } from './user.service';
import { UserController } from './user.controller';
import { UserRepository } from './repository/user.repository';
import { databaseConfig } from 'src/core/database/database.config';
import { databaseProviders } from 'src/core/database/database.provider';
import { DatabaseModule } from 'src/core/database/database.module';

@Module({
  providers: [UsersService, UserRepository],
  controllers: [UserController],
  exports: [UsersService],
  imports: [DatabaseModule]
})
export class UsersModule {}
