import { BaseEntity } from 'src/common/base.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { UserEntity } from './user.entity';

@Entity('user_action_logs')
export class UserActionLogEntity extends BaseEntity {
  @ManyToOne(() => UserEntity, (entity) => entity.userActionLogs, {
    nullable: false,
  })
  @JoinColumn({
    name: 'user_id',
  })
  user: UserEntity;

  @Column({
    name: 'user_id',
    type: 'int',
    unsigned: true,
  })
  userId: number;

  @Column({
    type: 'varchar',
    length: 255,
  })
  action: string;

  @Column({
    type: 'varchar',
    length: 255,
  })
  userAgent: string;
}
