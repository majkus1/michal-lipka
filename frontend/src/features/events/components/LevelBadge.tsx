import type { EventLevel } from '../../../shared/constants/event-level';

const badgeClassByLevel: Record<EventLevel, string> = {
  DEBUG: 'bg-slate-100 text-slate-700',
  INFO: 'bg-blue-100 text-blue-700',
  WARNING: 'bg-amber-100 text-amber-700',
  ERROR: 'bg-red-100 text-red-700',
};

interface LevelBadgeProps {
  level: EventLevel;
}

export function LevelBadge({ level }: LevelBadgeProps) {
  return (
    <span
      className={`inline-flex rounded px-2 py-1 text-xs font-semibold ${badgeClassByLevel[level]}`}
    >
      {level}
    </span>
  );
}

