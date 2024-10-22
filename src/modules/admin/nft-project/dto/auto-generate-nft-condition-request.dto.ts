import { IsBoolean, IsNotEmpty } from 'class-validator';

export class AutoGenerateNftConditionRequestDto {
  @IsBoolean()
  @IsNotEmpty()
  isVerifiedAccount: boolean;
}
