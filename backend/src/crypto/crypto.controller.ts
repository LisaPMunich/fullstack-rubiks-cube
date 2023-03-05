import {
  Controller,
  Post,
  Body,
} from '@nestjs/common';
import { CryptoService } from './crypto.service';
import { DecodeCryptoDto } from './dto/decode-crypto.dto';
import { EncodeCryptoDto } from "./dto/encode-crypto.dto";

@Controller('crypto')
export class CryptoController {
  constructor(private readonly cryptoService: CryptoService) {}

  @Post('encode')
  async encode(
    @Body() encodeCryptoDto: EncodeCryptoDto,
  ) {
    const { rawLosungswort, rawInput } = encodeCryptoDto;

    return this.cryptoService.encode(rawLosungswort, rawInput);
  }

  @Post('decode')
  async decode(
      @Body() decodeCryptoDto: DecodeCryptoDto,
  ) {
    const { losungswort, encodedInput } = decodeCryptoDto;

    return this.cryptoService.decode(losungswort, encodedInput);
  }
}
