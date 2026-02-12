import { SystemEvent } from '../models/system-event.model';

export const EVENT_REPOSITORY = Symbol('EVENT_REPOSITORY');

export interface EventRepository {
  findAll(): Promise<SystemEvent[]>;
}

