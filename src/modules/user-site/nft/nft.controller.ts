import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { NftService } from './nft.service';
import { MintNftRequestDto } from './dto/mint-nft-request.dto';
import { NftDetailDto } from './dto/nft-detail.dto';

@Controller('nft')
export class NftController {
  constructor(private readonly nftService: NftService) {}

  @Get()
  getListNft() {
    return this.nftService.findAll();
  }

  @Post()
  mint(@Body() mintNftDto: MintNftRequestDto) {
    return this.nftService.mint(mintNftDto);
  }

  @Get(':id')
  getNft(@Param('id') id: string): Promise<NftDetailDto> {
    return this.nftService.getNft(+id);
  }

  @Put(':id')
  useNft(@Param('id') id: string) {
    return this.nftService.useNft(+id);
  }

  @Get(':id/history')
  usedHistory(@Param('id') id: string) {
    return this.nftService.usedHistory(+id);
  }
}
