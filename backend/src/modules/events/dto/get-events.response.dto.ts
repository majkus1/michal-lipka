import { SystemEventDto } from './system-event.dto';

export interface GetEventsResponseDto {
  items: SystemEventDto[];
  total: number;
  limit: number;
  offset: number;
}

