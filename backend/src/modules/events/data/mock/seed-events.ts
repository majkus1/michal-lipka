import { EventLevel } from '../../models/event-level.enum';
import { SystemEvent } from '../../models/system-event.model';

export const SEED_EVENTS: SystemEvent[] = [
  {
    id: 'evt-001',
    level: EventLevel.INFO,
    message: 'Application boot sequence started',
    timestamp: '2026-02-10T08:00:00.000Z',
  },
  {
    id: 'evt-002',
    level: EventLevel.DEBUG,
    message: 'Loaded odds feed configuration',
    timestamp: '2026-02-10T08:01:00.000Z',
  },
  {
    id: 'evt-003',
    level: EventLevel.WARNING,
    message: 'Latency spike detected in pricing service',
    timestamp: '2026-02-10T08:03:00.000Z',
  },
  {
    id: 'evt-004',
    level: EventLevel.ERROR,
    message: 'Failed to publish event to queue',
    timestamp: '2026-02-10T08:05:00.000Z',
  },
  {
    id: 'evt-005',
    level: EventLevel.INFO,
    message: 'Retry policy reconnected to queue',
    timestamp: '2026-02-10T08:06:00.000Z',
  },
  {
    id: 'evt-006',
    level: EventLevel.DEBUG,
    message: 'Odds update payload validated',
    timestamp: '2026-02-10T09:00:00.000Z',
  },
  {
    id: 'evt-007',
    level: EventLevel.WARNING,
    message: 'Fallback provider used for missing market data',
    timestamp: '2026-02-10T09:15:00.000Z',
  },
  {
    id: 'evt-008',
    level: EventLevel.INFO,
    message: 'Settlement batch started',
    timestamp: '2026-02-10T10:00:00.000Z',
  },
  {
    id: 'evt-009',
    level: EventLevel.ERROR,
    message: 'Risk limit service timeout',
    timestamp: '2026-02-10T10:02:00.000Z',
  },
  {
    id: 'evt-010',
    level: EventLevel.INFO,
    message: 'Risk limit service recovered',
    timestamp: '2026-02-10T10:05:00.000Z',
  },
  {
    id: 'evt-011',
    level: EventLevel.DEBUG,
    message: 'Heartbeat sent to external monitoring',
    timestamp: '2026-02-10T11:00:00.000Z',
  },
  {
    id: 'evt-012',
    level: EventLevel.WARNING,
    message: 'High memory usage observed on worker node',
    timestamp: '2026-02-10T11:10:00.000Z',
  },
  {
    id: 'evt-013',
    level: EventLevel.INFO,
    message: 'Cache warmup completed',
    timestamp: '2026-02-10T11:20:00.000Z',
  },
  {
    id: 'evt-014',
    level: EventLevel.ERROR,
    message: 'Snapshot storage write failed',
    timestamp: '2026-02-10T11:30:00.000Z',
  },
  {
    id: 'evt-015',
    level: EventLevel.INFO,
    message: 'Snapshot storage write retried successfully',
    timestamp: '2026-02-10T11:31:00.000Z',
  },
];

