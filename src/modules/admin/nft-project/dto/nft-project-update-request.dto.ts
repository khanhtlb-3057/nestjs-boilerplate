import { IsNotEmpty, IsString } from 'class-validator';
export class NftProjectUpdateRequestDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}
