import { Test, TestingModule } from '@nestjs/testing';
import { JourneyStoptsNodeService } from './journey_stopts-node.service';

describe('JourneyStoptsNodeService', () => {
  let service: JourneyStoptsNodeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JourneyStoptsNodeService],
    }).compile();

    service = module.get<JourneyStoptsNodeService>(JourneyStoptsNodeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
