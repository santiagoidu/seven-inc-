import { Injectable, NotFoundException, Inject } from '@nestjs/common';
// import { v4 as uuid } from 'uuid';
import { Repository } from 'typeorm';
import { Employee } from './employee.entity';
import { EmployeeDto } from './employee.dto';

@Injectable()
export class EmployeesRepository {
  constructor(
    @Inject('EMPLOYEE_REPOSITORY')
    private employeeRepository: Repository<Employee>,
  ) {}

  async getAll(): Promise<any> {
    return await this.employeeRepository.find();
  }

  async getOnce(id: number): Promise<any> {
    return await this.employeeRepository.findOne(id);
  }

  async create(employee: EmployeeDto): Promise<any> {
    const employeeToSave = new Employee();
    employeeToSave.name = employee.name;
    employeeToSave.position = employee.position;
    employeeToSave.bornDate = String(employee.bornDate);
    employeeToSave.salary = employee.salary || 0;

    const newEmployee = await this.employeeRepository.save(employeeToSave);
    return newEmployee;
  }

  async edit(id: number, employee: EmployeeDto): Promise<any> {
    const employeeToSave = new Employee();
    employeeToSave.name = employee.name;
    employeeToSave.position = employee.position;
    employeeToSave.bornDate = String(employee.bornDate);
    employeeToSave.salary = employee.salary || 0;

    const modifyResponse = await this.employeeRepository.update(
      id,
      employeeToSave,
    );

    if (modifyResponse.affected == 0) {
      throw new NotFoundException('ID não encontrado!');
    }

    return { message: 'Alterado com sucesso' };
  }

  async delete(id: number): Promise<void> {
    const deleteResponse = await this.employeeRepository.delete(id);

    if (deleteResponse.affected == 0) {
      throw new NotFoundException('ID não encontrado!');
    }
  }
}
