import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrimenumModule } from './primenum/primenum.module';

@Module({
  imports: [PrimenumModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
