import { Logger, Module } from '@nestjs/common';
import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
class EventsGateway {
  logger = new Logger('EventsGateway');

  @WebSocketServer()
  server: Server;

  @SubscribeMessage('events')
  handleMessage(
    @MessageBody() messageBody: string,
    @ConnectedSocket() client: Socket,
  ) {
    this.logger.log(messageBody);
    client.emit('channel_1', { msg: process.env.MESSAGE });
  }
}

@Module({
  providers: [EventsGateway],
})
export class MainModule {}
