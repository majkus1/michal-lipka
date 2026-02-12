export const EVENT_LEVELS = ['DEBUG', 'INFO', 'WARNING', 'ERROR'] as const;

export type EventLevel = (typeof EVENT_LEVELS)[number];

export const EVENT_LEVEL_LABEL: Record<EventLevel, string> = {
  DEBUG: 'Debug',
  INFO: 'Informacja',
  WARNING: 'Ostrzeżenie',
  ERROR: 'Błąd',
};

