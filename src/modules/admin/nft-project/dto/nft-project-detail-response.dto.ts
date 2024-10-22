import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class NftProjectDetailResponseDto {
  @ApiProperty()
  @Expose()
  id: number;

  @ApiProperty()
  @Expose()
  name: string;

  @ApiProperty()
  @Expose()
  description: string;

  @ApiProperty()
  @Expose()
  image: string;

  @ApiProperty()
  @Expose()
  chain: string;

  @ApiProperty()
  @Expose()
  contractAddress: string;

  @ApiProperty()
  @Expose()
  tokenId: string;
}
