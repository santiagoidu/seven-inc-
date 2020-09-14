import { Injectable } from '@nestjs/common';
import { EmployeesRepository } from './employees.repository';

@Injectable()
export class EmployeesService {
  constructor(private readonly employeesRepository: EmployeesRepository) {}

  async getAll(): Promise<any> {
    return await this.employeesRepository.getAll();
  }

  async create(data): Promise<any> {
    return await this.employeesRepository.create(data);
  }

  async edit(id, employee): Promise<any> {
    return this.employeesRepository.edit(id, employee);
  }

  async delete(id): Promise<void> {
    return this.employeesRepository.delete(id);
  }
}
