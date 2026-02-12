import { EventLevel } from '../models/event-level.enum';

export interface SystemEventDto {
  id: string;
  level: EventLevel;
  message: string;
  timestamp: string;
}

