import { Body, Controller, Query, Get, Post, Param, Put } from '@nestjs/common';
import { NftProjectService } from './nft-project.service';
import { NftProjectCreateRequestDto } from './dto/nft-project-create-request.dto';
import { NftProjectListQueryDto } from './dto/nft-project-list-query.dto';
import { NftProjectListResponseDto } from './dto/nft-project-list-response.dto';
import { NftProjectDetailResponseDto } from './dto/nft-project-detail-response.dto';
import { NftProjectUpdateRequestDto } from './dto/nft-project-update-request.dto';
import { AutoGenerateNftConditionRequestDto } from './dto/auto-generate-nft-condition-request.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('admin/nft-project')
@ApiTags('NFT Project')
export class NftProjectController {
  constructor(private readonly nftProjectService: NftProjectService) {}

  @Post()
  async createNftProject(
    @Body() body: NftProjectCreateRequestDto,
  ): Promise<void> {
    return this.nftProjectService.createNftProject(body);
  }

  @Get()
  async getNftProjectList(
    @Query() query: NftProjectListQueryDto,
  ): Promise<NftProjectListResponseDto> {
    return this.nftProjectService.getNftProjectList(query);
  }

  @Get(':id')
  async getNftProjectDetail(
    @Param('id') id: number,
  ): Promise<NftProjectDetailResponseDto> {
    return this.nftProjectService.getNftProjectDetail(id);
  }

  @Put(':id')
  async updateNftProject(
    @Param('id') id: number,
    @Body() body: NftProjectUpdateRequestDto,
  ): Promise<void> {
    return this.nftProjectService.updateNftProject(id, body);
  }

  @Put(':id/setting-auto-generate-condition')
  async settingAutoGenerateCondition(
    @Param('id') id: number,
    @Body() body: AutoGenerateNftConditionRequestDto,
  ): Promise<void> {
    return this.nftProjectService.settingAutoGenerateCondition(id, body);
  }
}
