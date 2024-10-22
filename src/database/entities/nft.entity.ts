import { BaseEntity } from 'src/common/base.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { NftProjectEntity } from './nft-project.entity';
import { NftActionLogEntity } from './nft-action-log.entity';

@Entity('nfts')
export class NftEntity extends BaseEntity {
  @ManyToOne(() => NftProjectEntity, (entity) => entity.nfts, {
    nullable: false,
  })
  @JoinColumn({
    name: 'nft_project_id',
  })
  nftProject!: NftProjectEntity;

  @OneToMany(() => NftActionLogEntity, (entity) => entity.nft)
  nftActionLogs!: NftActionLogEntity[];

  @Column({
    name: 'nft_project_id',
    type: 'int',
    unsigned: true,
  })
  nftProjectId: number;

  @Column({
    type: 'varchar',
    length: 255,
  })
  name: string;

  @Column({
    type: 'varchar',
    length: 255,
  })
  description: string;

  @Column({
    name: 'expired_at',
    type: 'datetime',
    nullable: true,
  })
  expiredAt: Date;

  @Column({
    name: 'used_at',
    type: 'datetime',
    nullable: true,
  })
  usedAt: Date;

  @Column({
    type: 'boolean',
    default: false,
  })
  isUsed: boolean;
}
