import { IsString, IsNumber, IsDateString } from 'class-validator';

export class EmployeeDto {
  id?: string;
  @IsString()
  name: string;

  @IsDateString()
  bornDate: Date;

  @IsNumber()
  salary: number;

  @IsString()
  position: string;
}
