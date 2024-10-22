import { NftDetailResponseDto } from './nft-detail-response.dto';
import { ApiProperty } from '@nestjs/swagger';

export class NftListResponseDto {
  @ApiProperty()
  nftItems: NftDetailResponseDto[];
}
