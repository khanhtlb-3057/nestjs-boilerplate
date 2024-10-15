import { Injectable } from '@nestjs/common';
import { NftListQueryDto } from './dto/nft-list-query.dto';
import { NftIdsRequestDto } from './dto/nft-ids-request.dto';
import { NftListResponseDto } from './dto/nft-list-response.dto';
import { NftDetailResponseDto } from './dto/nft-detail-response.dto';

@Injectable()
export class NftService {
  async getListNft(query: NftListQueryDto): Promise<NftListResponseDto> {
    console.log(query);

    return {
      nftItems: [],
    } as NftListResponseDto;
  }

  async getNftDetail(id: number): Promise<NftDetailResponseDto> {
    console.log(id);

    return {} as NftDetailResponseDto;
  }

  async confirmNft(id: number, body: NftIdsRequestDto): Promise<void> {
    console.log(id, body);
  }
}
