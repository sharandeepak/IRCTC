import { Test, TestingModule } from '@nestjs/testing';
import { JourneyService } from './journey.service';

describe('JourneyService', () => {
  let service: JourneyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JourneyService],
    }).compile();

    service = module.get<JourneyService>(JourneyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
