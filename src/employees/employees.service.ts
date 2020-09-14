import { Injectable } from '@nestjs/common';
import { EmployeesRepository } from './employees.repository';
import { EmployeeDto } from './employee.dto';

@Injectable()
export class EmployeesService {
  constructor(private readonly employeesRepository: EmployeesRepository) {}

  async getAll(): Promise<any> {
    return await this.employeesRepository.getAll();
  }

  async getOnce(id: number) {
    return await this.employeesRepository.getOnce(id);
  }

  async create(employee: EmployeeDto): Promise<any> {
    return await this.employeesRepository.create(employee);
  }

  async edit(id: number, employee: EmployeeDto): Promise<any> {
    return this.employeesRepository.edit(id, employee);
  }

  async delete(id: number): Promise<any> {
    await this.employeesRepository.delete(id);
    return { message: 'deleted with success!' };
  }
}
