# Podgląd zdarzeń systemowych

Prosta aplikacja do przeglądania zdarzeń systemowych z filtrowaniem i paginacją.

- Backend: NestJS + TypeScript (strict)
- Frontend: React + Vite + TypeScript (strict) + TailwindCSS
- Start: lokalnie (npm) albo przez Docker Compose

## Uruchomienie

### Lokalnie (npm)

Backend:
```powershell
cd backend
Copy-Item env.example .env
npm install
npm run start:dev
```

Frontend (drugi terminal):
```powershell
cd frontend
Copy-Item env.example .env
npm install
npm run dev
```

- Frontend: `http://localhost:5173`
- Backend: `http://localhost:3000`

### Docker Compose

```bash
docker compose up --build
```

- Frontend: `http://localhost:5173`
- Backend: `http://localhost:3000`

## API

### `GET /api/v1/events`

Query params:
- `from` (opcjonalny, ISO 8601)
- `to` (opcjonalny, ISO 8601)
- `minLevel` (`DEBUG | INFO | WARNING | ERROR`)
- `limit` (domyślnie `50`, max `200`)
- `offset` (domyślnie `0`)

Response:
```json
{
  "items": [],
  "total": 0,
  "limit": 50,
  "offset": 0
}
```

Przykłady:
- `GET http://localhost:3000/api/v1/events`
- `GET http://localhost:3000/api/v1/events?minLevel=WARNING`
- `GET http://localhost:3000/api/v1/events?from=2026-02-10T09:00:00.000Z&to=2026-02-10T12:00:00.000Z&limit=10&offset=0`

## Struktura backendu (NestJS)

Moduł `events` ma klasyczny układ:
- `events.controller.ts` – warstwa HTTP
- `services/events.service.ts` – use-case endpointu
- `dto/` – walidacja i transformacja query
- `models/` – modele domenowe i enum poziomów
- `services/event-filtering.service.ts` – reguły filtrowania/rankingu
- `repositories/` – interfejs repo i implementacja in-memory
- `data/mock/seed-events.ts` – dane mockowe dla adaptera in-memory

## Decyzje architektoniczne

- Uproszczona, modułowa struktura NestJS dobrana do skali zadania (MVP), bez nadmiarowych warstw.
- Brak logiki biznesowej w kontrolerze; kontroler deleguje do serwisów.
- Filtry i ranking poziomów są wydzielone do osobnej usługi, co poprawia testowalność.
- Repozytorium jest oparte o interfejs (`EventRepository`), więc można podmienić in-memory na DB bez zmiany kontraktu API.
- Dane testowe są jawnie oznaczone jako mock (`data/mock`), żeby od razu było jasne, że nie pochodzą z bazy produkcyjnej.
- Frontend trzyma stan filtrów w URL (search params), więc widok jest odtwarzalny i łatwy do udostępnienia.

## Inne możliwe warianty

- Bardziej rozbudowana architektura warstwowa (np. application/domain/infrastructure) przy większej domenie.
- Dla bardzo dużych wolumenów: cursor pagination zamiast offset.
- Rozszerzenie o autoryzację, SSE/WebSocket i adapter do zewnętrznego źródła logów.

## Testy

- Testy jednostkowe backendu: `event-filtering.service.spec.ts`
  - filtr `WARNING i wyżej`
  - filtr po zakresie dat
  - sortowanie po czasie malejąco

