import { IsString, IsNumber } from 'class-validator';

export class EmployeeDto {
  @IsString()
  name: string;

  bornDate: Date;
  @IsNumber()
  salary: number;

  @IsString()
  position: string;
}
