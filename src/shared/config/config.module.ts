import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as Joi from 'joi';

import { APP_CONFIG_SERVICE } from 'src/common/constants/app.constant';
import { AppConfigService } from './config.service';
import configuration from './configuration';

const appConfigService = {
  provide: APP_CONFIG_SERVICE,
  useClass: AppConfigService,
};

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      validationSchema: Joi.object({
        APP_ENV: Joi.string().valid('dev', 'prod', 'test'),
        APP_NAME: Joi.string(),
        APP_PORT: Joi.number(),
        APP_FRONT_END_HOST: Joi.string(),
        APP_HOST: Joi.string(),
        APP_TZ: Joi.string(),
        APP_PUBLIC_KEY: Joi.string(),
        APP_PRIVATE_KEY: Joi.string(),
      }),
    }),
  ],
  providers: [ConfigService, appConfigService, AppConfigService],
  exports: [ConfigService, APP_CONFIG_SERVICE, AppConfigService],
})
export class AppConfigModule {}
