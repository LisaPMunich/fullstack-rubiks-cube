import { Test, TestingModule } from '@nestjs/testing';
import { CryptoService } from './crypto.service';
import { EncodeCryptoDto } from "./dto/encode-crypto.dto";
import { DecodeCryptoDto } from "./dto/decode-crypto.dto";
import axios from "axios";


describe('CryptoService', () => {
  let service: CryptoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CryptoService],
    }).compile();

    service = module.get<CryptoService>(CryptoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });


  it('should return an encoded message' , () => {
    const encodeCryptoDto: EncodeCryptoDto = {
      rawLosungswort: 'SCHWARZ',
      rawInput: 'Hallo wie geht es Dir',
    };
    return axios.post('http://localhost:3000/crypto/encode', encodeCryptoDto)
        .then((res) => {
          expect(res.status).toBe(201);
          expect(res.data).toBe('Hi aeel slg oeD hiwtr');
        });
  });

  it('should return a decoded message', () => {
    const decodeCryptoDto: DecodeCryptoDto = {
      losungswort: 'SCHWARZ',
      encodedInput: 'Hi aeel slg oeD hiwtr',
    };
    return axios.post('http://localhost:3000/crypto/decode', decodeCryptoDto)
        .then((res) => {
          expect(res.status).toBe(201);
          expect(res.data).toBe('Hallo wie geht es Dir');
        });
  });
});
