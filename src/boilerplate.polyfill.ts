// gkc_hash_code : 01HCXMP1V37PYTYHGBX21CJ029
import { ClassConstructor, plainToInstance } from 'class-transformer';
import { Brackets, QueryBuilder, SelectQueryBuilder } from 'typeorm';
import { PageMetaDto } from './common/dto/page-meta.dto';
import { PageDto } from './common/dto/page.dto';
import { PageOptionsDto } from './common/dto/page-options.dto';
import { PaginationConstant } from './common/constants/pagination.constant';

declare global {
  interface Array<T> {
    toPageDto<Dto>(
      this: T[],
      dto: ClassConstructor<Dto>,
      pageMetaDto: PageMetaDto,
    ): PageDto<Dto>;
  }
}

declare module 'typeorm' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface QueryBuilder<Entity> {
    searchByString(
      q: string,
      columnNames: string[],
      parameterName?: string,
    ): this;
  }

  interface SelectQueryBuilder<Entity> {
    paginate(
      this: SelectQueryBuilder<Entity>,
      pageOptionsDto: PageOptionsDto,
      getRaw?: boolean,
      distinct?: boolean,
    ): Promise<[Entity[], PageMetaDto]>;
  }

  interface SelectQueryBuilder<Entity> {
    paginateSub(
      this: SelectQueryBuilder<Entity>,
      pageOptionsDto: PageOptionsDto,
      resourceName: string,
      distinct?: boolean,
    ): Promise<[Entity[], PageMetaDto]>;
  }
}

SelectQueryBuilder.prototype.paginate = async function (
  pageOptionsDto: PageOptionsDto,
  getRaw = false,
  distinct = false,
) {
  const page = pageOptionsDto.page || PaginationConstant.DefaultPage;
  const count = pageOptionsDto.take || PaginationConstant.DefaultCount;

  if (distinct) {
    this.take(count).skip((page - 1) * count);
  } else {
    this.limit(count).offset((page - 1) * count);
  }

  const [results, total] = getRaw
    ? await Promise.all([this.getRawMany(), this.getCount()])
    : await this.getManyAndCount();

  const pageMetaDto = new PageMetaDto({
    itemCount: total,
    pageOptionsDto,
  });

  return [results, pageMetaDto];
};

SelectQueryBuilder.prototype.paginateSub = async function (
  pageOptionsDto: PageOptionsDto,
  resourceName: string,
  distinct = false,
) {
  const page = pageOptionsDto.page || PaginationConstant.DefaultPage;
  const count = pageOptionsDto.take || PaginationConstant.DefaultCount;
  this.andWhere(`${resourceName}.id > 0`);

  if (distinct) {
    this.take(count).skip((page - 1) * count);
  } else {
    this.limit(count).offset((page - 1) * count);
  }

  const subQuery = this.clone().select(`${resourceName}.id`, 'id').getQuery();

  const [results, total] = await Promise.all([
    this.clone()
      .groupBy()
      .offset(undefined)
      .limit(undefined)
      .skip(undefined)
      .take(undefined)
      .innerJoin('(' + subQuery + ')', 'sub', `${resourceName}.id = sub.id`)
      .getMany(),
    this.getCount(),
  ]);

  const pageMetaDto = new PageMetaDto({
    itemCount: total,
    pageOptionsDto,
  });

  return [results, pageMetaDto];
};

QueryBuilder.prototype.searchByString = function (
  q: string,
  columnNames: string[],
  parameterName = 'q',
) {
  if (!q) return this;
  this.andWhere(
    new Brackets((qb) => {
      for (const item of columnNames) {
        qb.orWhere(`${item} like :${parameterName}`);
      }
    }),
  );

  this.setParameter(parameterName, `%${q}%`);

  return this;
};

Array.prototype.toPageDto = function (dto, pageMetaDto: PageMetaDto) {
  return new PageDto(
    plainToInstance(dto, this, {
      excludeExtraneousValues: true,
      enableImplicitConversion: true,
    }),
    pageMetaDto,
  );
};
