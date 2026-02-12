import type { EventFilters } from '../event-filters';

export function filtersToQuery(filters: EventFilters): string {
  const query = new URLSearchParams();

  if (filters.from) {
    query.set('from', filters.from);
  }

  if (filters.to) {
    query.set('to', filters.to);
  }

  if (filters.minLevel) {
    query.set('minLevel', filters.minLevel);
  }

  query.set('limit', String(filters.limit));
  query.set('offset', String(filters.offset));

  return query.toString();
}

