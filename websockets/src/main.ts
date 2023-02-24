import { NestFactory } from '@nestjs/core';
import { MainModule } from './main.module';
import { Logger } from '@nestjs/common';

void (async () => {
  const app = await NestFactory.create(MainModule);
  await app.listen(3000);
  Logger.log(`Application is running on ${await app.getUrl()}`, 'Main');
})();
