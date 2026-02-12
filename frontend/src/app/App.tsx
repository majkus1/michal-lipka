import { EventsPage } from '../features/events/components/EventsPage';

export function App() {
  return (
    <main className="min-h-screen bg-slate-100 text-slate-900">
      <div className="mx-auto max-w-7xl p-4 sm:p-6">
        <EventsPage />
      </div>
    </main>
  );
}

