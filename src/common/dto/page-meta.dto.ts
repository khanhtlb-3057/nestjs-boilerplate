// gkc_hash_code : 01HCXMP1V37PYTYHGBX21CJ029
import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { PageMetaDtoParametersType } from '../types';

export class PageMetaDto {
  @ApiProperty()
  @Expose()
  readonly page: number;

  @ApiProperty()
  @Expose()
  readonly take: number;

  @ApiProperty()
  @Expose()
  readonly itemCount: number;

  @ApiProperty()
  @Expose()
  readonly pageCount: number;

  @ApiProperty()
  @Expose()
  readonly hasPreviousPage: boolean;

  @ApiProperty()
  @Expose()
  readonly hasNextPage: boolean;

  constructor({ pageOptionsDto, itemCount }: PageMetaDtoParametersType) {
    this.page = pageOptionsDto.page;
    this.take = pageOptionsDto.take;

    this.itemCount = itemCount;
    this.pageCount = Math.ceil(this.itemCount / this.take);
    this.hasPreviousPage = this.page > 1;
    this.hasNextPage = this.page < this.pageCount;
  }
}
