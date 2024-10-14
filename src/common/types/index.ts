import { PageOptionsDto } from '../dto/page-options.dto';

export type PageMetaDtoParametersType = {
  pageOptionsDto: PageOptionsDto;
  itemCount: number;
};

export type Constructor<T = any, Arguments extends unknown[] = any[]> = new (
  ...arguments_: Arguments
) => T;

export type KeyOfType<Entity, U> = {
  [P in keyof Required<Entity>]: Required<Entity>[P] extends U
    ? P
    : Required<Entity>[P] extends U[]
      ? P
      : never;
}[keyof Entity];
