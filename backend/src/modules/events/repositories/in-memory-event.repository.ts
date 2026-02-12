import { Injectable } from '@nestjs/common';
import { EventRepository } from './event-repository.interface';
import { SystemEvent } from '../models/system-event.model';
import { SEED_EVENTS } from '../data/mock/seed-events';

@Injectable()
export class InMemoryEventRepository implements EventRepository {
  private readonly events: SystemEvent[] = SEED_EVENTS;

  async findAll(): Promise<SystemEvent[]> {
    return this.events;
  }
}

