import { BaseEntity } from 'src/common/base.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { NftProjectEntity } from './nft-project.entity';

@Entity('nft_condition_settings')
export class NftConditionSettingEntity extends BaseEntity {
  @ManyToOne(() => NftProjectEntity, (entity) => entity.nfts, {
    nullable: false,
  })
  @JoinColumn({
    name: 'nft_project_id',
  })
  nftProject: NftProjectEntity;

  @Column({
    name: 'nft_project_id',
    type: 'int',
    unsigned: true,
  })
  nftProjectId: number;

  @Column({
    type: 'json',
  })
  condition: object;
}
