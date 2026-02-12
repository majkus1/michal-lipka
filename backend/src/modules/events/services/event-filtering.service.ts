import { Injectable } from '@nestjs/common';
import { EVENT_LEVEL_RANK } from '../models/event-level.enum';
import { EventFilters } from '../models/event-filters.model';
import { SystemEvent } from '../models/system-event.model';

@Injectable()
export class EventFilteringService {
  applyFilters(events: SystemEvent[], filters: EventFilters): SystemEvent[] {
    const filtered = events.filter((event) => {
      const eventDate = new Date(event.timestamp);

      if (filters.from && eventDate < filters.from) {
        return false;
      }

      if (filters.to && eventDate > filters.to) {
        return false;
      }

      if (
        filters.minLevel &&
        EVENT_LEVEL_RANK[event.level] < EVENT_LEVEL_RANK[filters.minLevel]
      ) {
        return false;
      }

      return true;
    });

    return filtered.sort(
      (a, b) =>
        new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime(),
    );
  }
}

