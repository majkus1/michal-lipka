import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EventsModule } from './modules/events/events.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), EventsModule],
})
export class AppModule {}
