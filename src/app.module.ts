import { AuthController } from './auth/auth.controller';
import { Module } from '@nestjs/common';
import { EmployeesModule } from './employees/employees.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AppController } from './app.controller';

@Module({
  imports: [EmployeesModule, AuthModule, UsersModule],
  controllers: [AuthController, AppController],
  providers: [],
})
export class AppModule {}
