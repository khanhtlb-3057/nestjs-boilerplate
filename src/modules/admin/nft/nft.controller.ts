import { Body, Controller, Get, Param, Put, Query } from '@nestjs/common';
import { NftService } from './nft.service';
import { NftListQueryDto } from './dto/nft-list-query.dto';
import { ApiTags } from '@nestjs/swagger';
import { NftIdsRequestDto } from './dto/nft-ids-request.dto';
import { NftListResponseDto } from './dto/nft-list-response.dto';
import { NftDetailResponseDto } from './dto/nft-detail-response.dto';

@Controller('admin/nft')
@ApiTags('NFT Admin')
export class NftController {
  constructor(private readonly nftService: NftService) {}

  @Get()
  async getListNft(
    @Query() query: NftListQueryDto,
  ): Promise<NftListResponseDto> {
    return this.nftService.getListNft(query);
  }

  @Get(':id')
  async getNftDetail(@Param('id') id: number): Promise<NftDetailResponseDto> {
    return this.nftService.getNftDetail(id);
  }

  @Put(':id/confirm')
  async confirmNft(
    @Param('id') id: number,
    @Body() body: NftIdsRequestDto,
  ): Promise<void> {
    return this.nftService.confirmNft(id, body);
  }
}
