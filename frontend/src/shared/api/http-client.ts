import { env } from '../config/env';

export async function apiGet<T>(path: string, signal?: AbortSignal): Promise<T> {
  const response = await fetch(`${env.apiUrl}${path}`, { signal });

  if (!response.ok) {
    throw new Error(`Żądanie zakończyło się błędem: ${response.status}`);
  }

  return (await response.json()) as T;
}

