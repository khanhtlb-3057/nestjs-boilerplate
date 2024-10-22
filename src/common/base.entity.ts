import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export class BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id!: number;

  @CreateDateColumn({
    type: 'timestamp',
  })
  createdAt!: Date;

  @UpdateDateColumn({
    type: 'timestamp',
  })
  updatedAt!: Date;

  @DeleteDateColumn({
    type: 'timestamp',
  })
  deletedAt!: Date;

  @Column({
    type: 'integer',
    nullable: true,
  })
  createdBy!: number;

  @Column({
    type: 'integer',
    nullable: true,
  })
  updatedBy!: number;
}
