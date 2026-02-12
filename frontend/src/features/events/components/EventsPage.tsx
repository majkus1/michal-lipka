import { useEvents } from '../hooks/use-events';
import { useEventFilters } from '../hooks/use-event-filters';
import { FiltersPanel } from './FiltersPanel';
import { EventsTable } from './EventsTable';

export function EventsPage() {
  const { filters, updateFilters } = useEventFilters();
  const { data, error, loading } = useEvents(filters);

  const hasPrevious = filters.offset > 0;
  const hasNext = Boolean(data && filters.offset + filters.limit < data.total);

  return (
    <section className="space-y-4">
      <header>
        <h1 className="text-2xl font-bold">Zdarzenia systemowe</h1>
        <p className="text-sm text-slate-600">
          Monitoruj i filtruj zdarzenia platformy.
        </p>
      </header>

      <FiltersPanel
        from={filters.from}
        to={filters.to}
        minLevel={filters.minLevel}
        onFromChange={(from) => updateFilters({ from, offset: 0 })}
        onToChange={(to) => updateFilters({ to, offset: 0 })}
        onMinLevelChange={(minLevel) => updateFilters({ minLevel, offset: 0 })}
      />

      {loading && (
        <div className="rounded border border-slate-200 bg-white p-4 text-sm text-slate-600">
          Ładowanie zdarzeń...
        </div>
      )}

      {error && (
        <div className="rounded border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          Nie udało się pobrać zdarzeń: {error}
        </div>
      )}

      {!loading && !error && data && (
        <>
          <EventsTable events={data.items} />

          <div className="flex flex-col gap-2 rounded border border-slate-200 bg-white p-4 text-sm shadow-sm sm:flex-row sm:items-center sm:justify-between">
            <span className="text-slate-600">
              Wyświetlono {data.items.length} z {data.total} zdarzeń
            </span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                disabled={!hasPrevious}
                onClick={() =>
                  updateFilters({
                    offset: Math.max(0, filters.offset - filters.limit),
                  })
                }
                className="rounded border border-slate-300 px-3 py-1.5 disabled:cursor-not-allowed disabled:opacity-50"
              >
                Poprzednia
              </button>
              <button
                type="button"
                disabled={!hasNext}
                onClick={() =>
                  updateFilters({
                    offset: filters.offset + filters.limit,
                  })
                }
                className="rounded border border-slate-300 px-3 py-1.5 disabled:cursor-not-allowed disabled:opacity-50"
              >
                Następna
              </button>
            </div>
          </div>
        </>
      )}
    </section>
  );
}

