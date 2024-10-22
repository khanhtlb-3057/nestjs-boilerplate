import { ApiProperty } from '@nestjs/swagger';

export class NftDetailDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  imageUrl: string;

  @ApiProperty()
  used: boolean;

  @ApiProperty()
  usedAt: Date;
}
