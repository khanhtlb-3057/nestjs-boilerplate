import { BaseEntity } from 'src/common/base.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { NftEntity } from './nft.entity';

@Entity('nft_action_logs')
export class NftActionLogEntity extends BaseEntity {
  @ManyToOne(() => NftEntity, (entity) => entity.nftActionLogs, {
    nullable: false,
  })
  @JoinColumn({
    name: 'nft_id',
  })
  nft: NftEntity;

  @Column({
    name: 'nft_id',
    type: 'int',
    unsigned: true,
  })
  nftId: number;

  @Column({
    type: 'varchar',
    length: 255,
  })
  action: string;

  @Column({
    type: 'varchar',
    length: 255,
  })
  walletAddress: string;

  @Column({
    type: 'varchar',
    length: 255,
  })
  from: string;

  @Column({
    type: 'varchar',
    length: 255,
  })
  to: string;
}
