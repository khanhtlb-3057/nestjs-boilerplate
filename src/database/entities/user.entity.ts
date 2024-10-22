import { BaseEntity } from 'src/common/base.entity';
import { UserType } from 'src/common/constants/app.enum';
import { Column, Entity, OneToMany } from 'typeorm';
import { UserActionLogEntity } from './user-action-log.entity';

@Entity('users')
export class UserEntity extends BaseEntity {
  @OneToMany(() => UserActionLogEntity, (entity) => entity.user)
  userActionLogs!: UserActionLogEntity[];

  @Column({
    type: 'varchar',
    length: 255,
  })
  email: string;

  @Column({
    type: 'varchar',
    length: 255,
  })
  password: string;

  @Column({
    type: 'varchar',
    length: 255,
  })
  walletAddress: string;

  @Column({
    type: 'enum',
    enum: UserType,
  })
  type: UserType;

  @Column({
    type: 'varchar',
    length: 255,
  })
  secretKey: string;

  @Column({
    type: 'varchar',
    length: 255,
  })
  publicKey: string;
}
