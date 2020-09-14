import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { EmployeeDto } from './emploee.dto';

@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  @Get()
  async getAll(): Promise<any> {
    return await this.employeesService.getAll();
  }

  @Post()
  async create(@Body() employee: EmployeeDto): Promise<any> {
    return await this.employeesService.create(employee);
  }

  @Put(':id')
  async edit(@Body() employee, @Param('id') id) {
    return await this.employeesService.edit(id, employee);
  }

  @Delete(':id')
  async delete(@Param('id') id) {
    await this.employeesService.delete(id);
    return { message: 'deleted with success!' };
  }
}
