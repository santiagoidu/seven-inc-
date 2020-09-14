import { Module } from '@nestjs/common';
import { EmployeesController } from './employees.controller';
import { EmployeesService } from './employees.service';
import { EmployeesRepository } from './employees.repository';
import { DatabaseModule } from '../database/database.module';
import { employeeProviders } from './employee.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [EmployeesController],
  providers: [EmployeesService, EmployeesRepository, ...employeeProviders],
})
export class EmployeesModule {}
