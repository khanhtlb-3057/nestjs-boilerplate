import { BaseEntity } from 'src/common/base.entity';
import { Column, Entity, OneToMany } from 'typeorm';
import { NftEntity } from './nft.entity';
import { NftConditionSettingEntity } from './nft-condition-setting.entity';

@Entity('nft_projects')
export class NftProjectEntity extends BaseEntity {
  @OneToMany(() => NftEntity, (entity) => entity.nftProject)
  nfts!: NftEntity[];

  @OneToMany(() => NftConditionSettingEntity, (entity) => entity.nftProject)
  nftConditionSettings!: NftConditionSettingEntity[];

  @Column({
    type: 'json',
  })
  tag: object;
}
