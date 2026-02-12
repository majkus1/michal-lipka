import type { EventLevel } from '../../../shared/constants/event-level';

export interface EventFilters {
  from?: string;
  to?: string;
  minLevel?: EventLevel;
  limit: number;
  offset: number;
}

export const DEFAULT_LIMIT = 50;
export const MAX_LIMIT = 200;

