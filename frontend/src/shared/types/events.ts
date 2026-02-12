import type { EventLevel } from '../constants/event-level';

export interface SystemEvent {
  id: string;
  level: EventLevel;
  message: string;
  timestamp: string;
}

export interface EventsResponse {
  items: SystemEvent[];
  total: number;
  limit: number;
  offset: number;
}

