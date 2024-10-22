import { IsNotEmpty } from 'class-validator';

import { IsString } from 'class-validator';

export class MintNftRequestDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  image: string;
}
