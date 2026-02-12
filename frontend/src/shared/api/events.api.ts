import { apiGet } from './http-client';
import type { EventsResponse } from '../types/events';
import type { EventFilters } from '../../features/events/model/event-filters';
import { filtersToQuery } from '../../features/events/model/mappers/filters-to-query';

export async function getEvents(
  filters: EventFilters,
  signal?: AbortSignal,
): Promise<EventsResponse> {
  const query = filtersToQuery(filters);
  const suffix = query ? `?${query}` : '';

  return apiGet<EventsResponse>(`/api/v1/events${suffix}`, signal);
}

