import { IsOptional, IsString } from 'class-validator';

export class NftListQueryDto {
  @IsString()
  @IsOptional()
  q: string;
}
