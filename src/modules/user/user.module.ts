import { Module } from '@nestjs/common';
import { UsersService } from './user.service';
import { UserController } from './user.controller';
import { UserRepository } from './repository/user.repository';

@Module({
  providers: [UsersService, UserRepository],
  controllers: [UserController],
  exports: [UsersService]
})
export class UsersModule {}
