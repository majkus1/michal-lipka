import {
  EVENT_LEVEL_LABEL,
  EVENT_LEVELS,
} from '../../../shared/constants/event-level';
import type { EventLevel } from '../../../shared/constants/event-level';

interface LevelFilterProps {
  value?: EventLevel;
  onChange: (value?: EventLevel) => void;
}

export function LevelFilter({ value, onChange }: LevelFilterProps) {
  return (
    <label className="flex flex-col gap-1 text-sm">
      <span className="font-medium text-slate-700">Minimalny poziom</span>
      <select
        value={value ?? ''}
        onChange={(event) => {
          const selected = event.target.value as EventLevel | '';
          onChange(selected === '' ? undefined : selected);
        }}
        className="rounded border border-slate-300 bg-white px-3 py-2"
      >
        <option value="">Wszystkie</option>
        {EVENT_LEVELS.map((level) => (
          <option key={level} value={level}>
            {EVENT_LEVEL_LABEL[level]} i wyżej
          </option>
        ))}
      </select>
    </label>
  );
}

