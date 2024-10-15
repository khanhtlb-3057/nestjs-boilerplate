import { Module } from '@nestjs/common';
import { NftProjectController } from './nft-project.controller';
import { NftProjectService } from './nft-project.service';

@Module({
  controllers: [NftProjectController],
  providers: [NftProjectService],
})
export class NftProjectModule {}
