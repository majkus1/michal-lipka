import { useEffect, useState } from 'react';
import { getEvents } from '../../../shared/api/events.api';
import type { EventsResponse } from '../../../shared/types/events';
import type { EventFilters } from '../model/event-filters';

interface UseEventsState {
  data: EventsResponse | null;
  loading: boolean;
  error: string | null;
}

export function useEvents(filters: EventFilters): UseEventsState {
  const [state, setState] = useState<UseEventsState>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const controller = new AbortController();

    setState((previous) => ({ ...previous, loading: true, error: null }));

    getEvents(filters, controller.signal)
      .then((data) => {
        setState({ data, loading: false, error: null });
      })
      .catch((error: unknown) => {
        if ((error as Error).name === 'AbortError') {
          return;
        }

        const message =
          error instanceof Error ? error.message : 'Wystąpił nieznany błąd';
        setState({ data: null, loading: false, error: message });
      });

    return () => {
      controller.abort();
    };
  }, [filters]);

  return state;
}

