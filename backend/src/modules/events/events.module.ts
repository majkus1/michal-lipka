import { Module } from '@nestjs/common';
import { EventsController } from './events.controller';
import { EventsService } from './services/events.service';
import { EventFilteringService } from './services/event-filtering.service';
import { EVENT_REPOSITORY } from './repositories/event-repository.interface';
import { InMemoryEventRepository } from './repositories/in-memory-event.repository';

@Module({
  controllers: [EventsController],
  providers: [
    EventsService,
    EventFilteringService,
    {
      provide: EVENT_REPOSITORY,
      useClass: InMemoryEventRepository,
    },
  ],
})
export class EventsModule {}

