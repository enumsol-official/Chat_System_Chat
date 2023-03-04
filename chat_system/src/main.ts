import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';
import { SocketAdapter } from './sockets/socket.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(join(__dirname, '..', 'static'));
  app.enableCors({
    origin: 'http://localhost:3000',
  });
  app.useWebSocketAdapter(new SocketAdapter(app));
  await app.listen(3001);
}
bootstrap();
