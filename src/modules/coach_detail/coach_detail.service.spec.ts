import { Test, TestingModule } from '@nestjs/testing';
import { CoachDetailService } from './service/coach_detail.service';

describe('CoachDetailService', () => {
  let service: CoachDetailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CoachDetailService],
    }).compile();

    service = module.get<CoachDetailService>(CoachDetailService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
