import { Controller, Get, Query } from '@nestjs/common';
import { EventsService } from './services/events.service';
import { GetEventsQueryDto } from './dto/get-events.query.dto';
import { GetEventsResponseDto } from './dto/get-events.response.dto';

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Get()
  async getEvents(
    @Query() query: GetEventsQueryDto,
  ): Promise<GetEventsResponseDto> {
    return this.eventsService.getEvents(query);
  }
}

