import { Module } from '@nestjs/common';
import { PrimenumController } from './primenum.controller';

@Module({
  controllers: [PrimenumController]
})
export class PrimenumModule {}
