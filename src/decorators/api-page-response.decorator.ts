// gkc_hash_code : 01HCXMP1V37PYTYHGBX21CJ029
import { applyDecorators, Type } from '@nestjs/common';
import {
  ApiExtraModels,
  ApiOkResponse,
  ApiOperation,
  getSchemaPath,
} from '@nestjs/swagger';
import { PageDto } from 'src/common/dto/page.dto';

export function ApiPageResponse<T extends Type>(options: {
  type: T;
  description?: string;
  summary?: string;
}): MethodDecorator {
  return applyDecorators(
    ApiExtraModels(PageDto),
    ApiExtraModels(options.type),
    ApiOkResponse({
      description: options.description,
      schema: {
        allOf: [
          { $ref: getSchemaPath(PageDto) },
          {
            properties: {
              data: {
                type: 'array',
                items: { $ref: getSchemaPath(options.type) },
              },
            },
          },
        ],
      },
    }),
    ApiOperation({ summary: options.summary }),
  );
}
