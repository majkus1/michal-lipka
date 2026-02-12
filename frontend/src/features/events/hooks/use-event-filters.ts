import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  DEFAULT_LIMIT,
  MAX_LIMIT,
} from '../model/event-filters';
import type { EventFilters } from '../model/event-filters';
import { EVENT_LEVELS } from '../../../shared/constants/event-level';
import type { EventLevel } from '../../../shared/constants/event-level';

interface UpdateFiltersInput {
  from?: string;
  to?: string;
  minLevel?: EventLevel;
  limit?: number;
  offset?: number;
}

function parseLevel(value: string | null): EventLevel | undefined {
  if (!value) {
    return undefined;
  }

  return EVENT_LEVELS.find((level) => level === value);
}

function parseLimit(value: string | null): number {
  const numeric = Number(value ?? DEFAULT_LIMIT);

  if (!Number.isInteger(numeric) || numeric < 1) {
    return DEFAULT_LIMIT;
  }

  return Math.min(numeric, MAX_LIMIT);
}

function parseOffset(value: string | null): number {
  const numeric = Number(value ?? 0);

  if (!Number.isInteger(numeric) || numeric < 0) {
    return 0;
  }

  return numeric;
}

export function useEventFilters() {
  const [searchParams, setSearchParams] = useSearchParams();

  const filters: EventFilters = useMemo(
    () => ({
      from: searchParams.get('from') ?? undefined,
      to: searchParams.get('to') ?? undefined,
      minLevel: parseLevel(searchParams.get('minLevel')),
      limit: parseLimit(searchParams.get('limit')),
      offset: parseOffset(searchParams.get('offset')),
    }),
    [searchParams],
  );

  const updateFilters = (next: UpdateFiltersInput) => {
    const merged: EventFilters = {
      ...filters,
      ...next,
    };

    const nextParams = new URLSearchParams();

    if (merged.from) {
      nextParams.set('from', merged.from);
    }

    if (merged.to) {
      nextParams.set('to', merged.to);
    }

    if (merged.minLevel) {
      nextParams.set('minLevel', merged.minLevel);
    }

    nextParams.set('limit', String(merged.limit));
    nextParams.set('offset', String(merged.offset));

    setSearchParams(nextParams, { replace: true });
  };

  const resetPagination = () => {
    updateFilters({ offset: 0 });
  };

  return { filters, updateFilters, resetPagination };
}

