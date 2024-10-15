import { IsArray, IsNumber } from 'class-validator';

export class NftIdsRequestDto {
  @IsArray()
  @IsNumber({}, { each: true })
  ids: number[];
}
