// gkc_hash_code : 01HCXMP1V37PYTYHGBX21CJ029
import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsEnum, IsInt, IsOptional, IsString, Max, Min } from 'class-validator';
import { PaginationConstant } from '../constants/pagination.constant';
import { Direction } from '../constants/app.enum';
import { ValidateConstant } from '../constants/validate.constant';

export class PageOptionsDto {
  @ApiPropertyOptional({
    minimum: PaginationConstant.Minimum,
    default: PaginationConstant.DefaultPage,
    maximum: ValidateConstant.MAX_SAFE_INTEGER,
  })
  @Min(PaginationConstant.Minimum)
  @Max(ValidateConstant.MAX_SAFE_INTEGER)
  @IsInt()
  @IsOptional()
  @Type(() => Number)
  readonly page: number = PaginationConstant.DefaultPage;

  @ApiPropertyOptional({
    minimum: PaginationConstant.Minimum,
    maximum: PaginationConstant.Maximum,
    default: PaginationConstant.DefaultCount,
  })
  @Min(PaginationConstant.Minimum)
  @Max(PaginationConstant.Maximum)
  @IsInt()
  @IsOptional()
  @Type(() => Number)
  readonly take: number = PaginationConstant.DefaultCount;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  @Type(() => String)
  readonly q: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  @Type(() => String)
  readonly orderBy: string;

  @ApiPropertyOptional({ default: Direction.ASC, enum: Direction })
  @IsEnum(Direction)
  @IsOptional()
  @Type(() => String)
  readonly order: Direction = Direction.ASC;
}
