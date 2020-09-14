import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { EmployeeDto } from './employee.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async getAll(): Promise<any> {
    return await this.employeesService.getAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async getOnce(@Param('id') id: number): Promise<any> {
    return await this.employeesService.getOnce(id);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(
    @Body(new ValidationPipe()) employee: EmployeeDto,
  ): Promise<any> {
    return await this.employeesService.create(employee);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async edit(
    @Body(new ValidationPipe()) employee: EmployeeDto,
    @Param('id') id: number,
  ) {
    return await this.employeesService.edit(id, employee);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async delete(@Param('id') id) {
    await this.employeesService.delete(id);
  }
}
