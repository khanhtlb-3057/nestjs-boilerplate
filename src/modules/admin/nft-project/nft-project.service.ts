import { Injectable } from '@nestjs/common';
import { NftProjectCreateRequestDto } from './dto/nft-project-create-request.dto';
import { NftProjectListQueryDto } from './dto/nft-project-list-query.dto';
import { NftProjectDetailResponseDto } from './dto/nft-project-detail-response.dto';
import { NftProjectUpdateRequestDto } from './dto/nft-project-update-request.dto';
import { NftProjectListResponseDto } from './dto/nft-project-list-response.dto';
import { AutoGenerateNftConditionRequestDto } from './dto/auto-generate-nft-condition-request.dto';

@Injectable()
export class NftProjectService {
  async createNftProject(body: NftProjectCreateRequestDto): Promise<void> {
    console.log(body);
  }

  async getNftProjectList(
    query: NftProjectListQueryDto,
  ): Promise<NftProjectListResponseDto> {
    console.log(query);
    return {} as NftProjectListResponseDto;
  }

  async getNftProjectDetail(id: number): Promise<NftProjectDetailResponseDto> {
    console.log(id);
    return {} as NftProjectDetailResponseDto;
  }

  async updateNftProject(
    id: number,
    body: NftProjectUpdateRequestDto,
  ): Promise<void> {
    console.log(id, body);
  }

  async settingAutoGenerateCondition(
    id: number,
    body: AutoGenerateNftConditionRequestDto,
  ): Promise<void> {
    console.log(id, body);
  }
}
