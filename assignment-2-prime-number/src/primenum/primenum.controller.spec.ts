import { Test, TestingModule } from '@nestjs/testing';
import { PrimenumController } from './primenum.controller';

describe('PrimenumController', () => {
  let controller: PrimenumController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PrimenumController],
    }).compile();

    controller = module.get<PrimenumController>(PrimenumController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
