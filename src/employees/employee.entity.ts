import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Employee {
  // @PrimaryGeneratedColumn("uuid")
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @Column()
  bornDate: string;

  @Column({ nullable: false, type: 'float', default: 0.0 })
  salary: number;

  @Column()
  position: string;
}
