import { EventLevel } from '../models/event-level.enum';
import { SystemEvent } from '../models/system-event.model';
import { EventFilteringService } from './event-filtering.service';

describe('EventFilteringService', () => {
  const service = new EventFilteringService();
  const events: SystemEvent[] = [
    {
      id: '1',
      level: EventLevel.DEBUG,
      message: 'debug',
      timestamp: '2026-02-10T10:00:00.000Z',
    },
    {
      id: '2',
      level: EventLevel.WARNING,
      message: 'warning',
      timestamp: '2026-02-10T10:01:00.000Z',
    },
    {
      id: '3',
      level: EventLevel.ERROR,
      message: 'error',
      timestamp: '2026-02-10T10:02:00.000Z',
    },
  ];

  it('returns WARNING and higher for minLevel WARNING', () => {
    const result = service.applyFilters(events, { minLevel: EventLevel.WARNING });

    expect(result).toHaveLength(2);
    expect(result.every((event) => event.level !== EventLevel.DEBUG)).toBe(true);
  });

  it('filters events inside date range', () => {
    const result = service.applyFilters(events, {
      from: new Date('2026-02-10T10:01:00.000Z'),
      to: new Date('2026-02-10T10:02:00.000Z'),
    });

    expect(result.map((event) => event.id)).toEqual(['3', '2']);
  });

  it('sorts results by timestamp descending', () => {
    const result = service.applyFilters(events, {});

    expect(result.map((event) => event.id)).toEqual(['3', '2', '1']);
  });
});

