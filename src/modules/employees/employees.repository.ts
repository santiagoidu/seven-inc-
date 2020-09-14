import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';

const employees = [];

@Injectable()
export class EmployeesRepository {
  getAll(): any {
    return employees;
  }

  create(employee): any {
    const newEmployee = { id: uuid(), ...employee };
    employees.push(newEmployee);
    return newEmployee;
  }

  edit(id, employee): any {
    const findRepositoryIndex = employees.findIndex(rep => rep.id == id);

    if (findRepositoryIndex > 0) {
      //   employees.splice(findRepositoryIndex, 1);
    } else {
      throw new NotFoundException('ID não encontrado!');
    }
  }

  delete(id) {
    const findRepositoryIndex = employees.findIndex(rep => rep.id == id);
    console.log(findRepositoryIndex);

    if (findRepositoryIndex >= 0) {
      employees.splice(findRepositoryIndex, 1);
    } else {
      throw new NotFoundException('ID não encontrado!');
    }
  }
}
