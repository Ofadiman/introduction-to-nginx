import { Controller, Get, Headers, Logger, Module } from '@nestjs/common';

@Controller()
class MainController {
  @Get('one')
  public one() {
    return { handler: 'one', message: process.env.MESSAGE };
  }

  @Get('two')
  public two() {
    return { handler: 'two', message: process.env.MESSAGE };
  }

  @Get('admin')
  public admin() {
    return { handler: 'admin', message: process.env.MESSAGE };
  }
}

@Module({
  controllers: [MainController],
})
export class MainModule {}
