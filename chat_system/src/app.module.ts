import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChatGateway } from './chat/chat.gateway';
import { SocketAdapter } from './sockets/socket.module';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, ChatGateway, SocketAdapter],
})
export class AppModule {}
