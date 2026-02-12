export enum EventLevel {
  DEBUG = 'DEBUG',
  INFO = 'INFO',
  WARNING = 'WARNING',
  ERROR = 'ERROR',
}

export const EVENT_LEVEL_RANK: Record<EventLevel, number> = {
  [EventLevel.DEBUG]: 10,
  [EventLevel.INFO]: 20,
  [EventLevel.WARNING]: 30,
  [EventLevel.ERROR]: 40,
};

