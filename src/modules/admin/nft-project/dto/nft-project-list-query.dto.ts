import { IsNotEmpty, IsString } from 'class-validator';

export class NftProjectListQueryDto {
  @IsString()
  @IsNotEmpty()
  q: string;
}
