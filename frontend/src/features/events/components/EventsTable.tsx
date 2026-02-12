import type { SystemEvent } from '../../../shared/types/events';
import { LevelBadge } from './LevelBadge';

interface EventsTableProps {
  events: SystemEvent[];
}

export function EventsTable({ events }: EventsTableProps) {
  return (
    <div className="overflow-x-auto rounded border border-slate-200 bg-white shadow-sm">
      <table className="min-w-full divide-y divide-slate-200 text-sm">
        <thead className="bg-slate-50">
          <tr>
            <th className="px-3 py-2 text-left font-semibold text-slate-700">ID</th>
            <th className="px-3 py-2 text-left font-semibold text-slate-700">
              Poziom
            </th>
            <th className="px-3 py-2 text-left font-semibold text-slate-700">
              Wiadomość
            </th>
            <th className="px-3 py-2 text-left font-semibold text-slate-700">
              Czas
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {events.map((event) => (
            <tr key={event.id}>
              <td className="px-3 py-2 font-mono text-xs">{event.id}</td>
              <td className="px-3 py-2">
                <LevelBadge level={event.level} />
              </td>
              <td className="px-3 py-2">{event.message}</td>
              <td className="px-3 py-2 text-slate-600">
                {new Date(event.timestamp).toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

