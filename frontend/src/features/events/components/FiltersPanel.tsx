import type { EventLevel } from '../../../shared/constants/event-level';
import { DateRangeFilter } from './DateRangeFilter';
import { LevelFilter } from './LevelFilter';

interface FiltersPanelProps {
  from?: string;
  to?: string;
  minLevel?: EventLevel;
  onFromChange: (value?: string) => void;
  onToChange: (value?: string) => void;
  onMinLevelChange: (value?: EventLevel) => void;
}

export function FiltersPanel({
  from,
  to,
  minLevel,
  onFromChange,
  onToChange,
  onMinLevelChange,
}: FiltersPanelProps) {
  return (
    <section className="rounded border border-slate-200 bg-white p-4 shadow-sm">
      <h2 className="mb-4 text-lg font-semibold">Filtry</h2>
      <div className="grid gap-4">
        <DateRangeFilter
          from={from}
          to={to}
          onFromChange={onFromChange}
          onToChange={onToChange}
        />
        <LevelFilter value={minLevel} onChange={onMinLevelChange} />
      </div>
    </section>
  );
}

