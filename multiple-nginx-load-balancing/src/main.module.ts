import { Controller, Get, Headers, Logger, Module } from '@nestjs/common';
import { hostname } from 'node:os';

@Controller()
class MainController {
  @Get()
  public ip(
    @Headers('X-Real-IP') realIp: string,
    @Headers('X-Forwarded-For') forwardedFor: string,
    @Headers('X-Forwarded-Host') forwardedHost: string,
    @Headers('Host') host: string,
  ) {
    const headers = { realIp, forwardedFor, forwardedHost, host };
    Logger.log('headers', headers);
    return { ...headers, hostname: hostname() };
  }
}

@Module({
  controllers: [MainController],
})
export class MainModule {}
