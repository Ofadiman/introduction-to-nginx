import { NestFactory } from '@nestjs/core';
import { MainModule } from './main.module';

void (async () => {
  const app = await NestFactory.create(MainModule);
  await app.listen(3000);
})();
