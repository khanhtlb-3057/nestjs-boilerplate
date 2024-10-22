import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { NftProjectDetailResponseDto } from './nft-project-detail-response.dto';

export class NftProjectListResponseDto {
  @ApiProperty()
  @Expose()
  nftDetail: NftProjectDetailResponseDto[];
}
