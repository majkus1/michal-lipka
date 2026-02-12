import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import {
  EVENT_REPOSITORY,
  type EventRepository,
} from '../repositories/event-repository.interface';
import { GetEventsQueryDto } from '../dto/get-events.query.dto';
import { GetEventsResponseDto } from '../dto/get-events.response.dto';
import { EventFilteringService } from './event-filtering.service';

@Injectable()
export class EventsService {
  constructor(
    @Inject(EVENT_REPOSITORY) private readonly repository: EventRepository,
    private readonly filteringService: EventFilteringService,
  ) {}

  async getEvents(query: GetEventsQueryDto): Promise<GetEventsResponseDto> {
    const fromDate = query.from ? new Date(query.from) : undefined;
    const toDate = query.to ? new Date(query.to) : undefined;

    if (fromDate && toDate && fromDate > toDate) {
      throw new BadRequestException('Query param "from" must be <= "to".');
    }

    const events = await this.repository.findAll();
    const filtered = this.filteringService.applyFilters(events, {
      from: fromDate,
      to: toDate,
      minLevel: query.minLevel,
    });
    const total = filtered.length;
    const items = filtered.slice(query.offset, query.offset + query.limit);

    return {
      items,
      total,
      limit: query.limit,
      offset: query.offset,
    };
  }
}

