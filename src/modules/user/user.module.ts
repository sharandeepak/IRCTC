import { Module } from '@nestjs/common';
import { UsersService } from './user.service';
import { UserController } from './user.controller';
import { UserRepository } from './repository/user.repository';
import { databaseConfig } from 'src/core/database/database.config';
import { DatabaseModule } from 'src/core/database/database.module';

@Module({
  controllers: [UserController],
  providers: [UsersService, UserRepository],
  imports: [DatabaseModule]
})
export class UsersModule {}
