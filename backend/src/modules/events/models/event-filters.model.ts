import { EventLevel } from './event-level.enum';

export interface EventFilters {
  from?: Date;
  to?: Date;
  minLevel?: EventLevel;
}

