import { Test, TestingModule } from '@nestjs/testing';
import { JourneyStopService } from './service/journey_stop.service';

describe('JourneyStopService', () => {
  let service: JourneyStopService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JourneyStopService],
    }).compile();

    service = module.get<JourneyStopService>(JourneyStopService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
