import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppConfigService {
  constructor(private configService: ConfigService) {}
  getEnv(): string {
    return this.configService.get<string>('app.env');
  }

  getPort(): number {
    return +this.configService.get<string>('app.port');
  }

  getPublicKey(): string {
    return this.configService.get<string>('app.publicKey');
  }

  getPrivateKey(): string {
    return this.configService.get<string>('app.privateKey');
  }
}
