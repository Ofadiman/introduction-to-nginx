import { Controller, Get, Headers, Logger, Module } from '@nestjs/common';

@Controller()
class MainController {
  @Get()
  public handler() {
    return { handler: 'handler', message: process.env.MESSAGE };
  }
}

@Module({
  controllers: [MainController],
})
export class MainModule {}
