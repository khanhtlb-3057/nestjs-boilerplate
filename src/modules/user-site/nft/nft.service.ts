import { Injectable } from '@nestjs/common';
import { MintNftRequestDto } from './dto/mint-nft-request.dto';
import { NftDetailDto } from './dto/nft-detail.dto';

@Injectable()
export class NftService {
  async mint(mintNftDto: MintNftRequestDto) {
    console.log(mintNftDto);
  }

  async findAll(): Promise<NftDetailDto[]> {
    return [];
  }
  async getNft(id: number): Promise<NftDetailDto> {
    return {
      id,
      name: 'NFT 1',
      description: 'This is the first NFT',
      imageUrl: 'https://example.com/nft1.png',
      used: false,
      usedAt: new Date(),
    };
  }

  async useNft(id: number) {
    console.log(id);
  }

  async usedHistory(id: number) {
    console.log(id);
    return [];
  }
}
