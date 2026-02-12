interface DateRangeFilterProps {
  from?: string;
  to?: string;
  onFromChange: (value?: string) => void;
  onToChange: (value?: string) => void;
}

function toInputDateTime(iso?: string): string {
  if (!iso) {
    return '';
  }

  const date = new Date(iso);
  const pad = (value: number) => String(value).padStart(2, '0');
  const year = date.getFullYear();
  const month = pad(date.getMonth() + 1);
  const day = pad(date.getDate());
  const hours = pad(date.getHours());
  const minutes = pad(date.getMinutes());

  return `${year}-${month}-${day}T${hours}:${minutes}`;
}

function fromInputDateTime(value: string): string | undefined {
  if (!value) {
    return undefined;
  }

  return new Date(value).toISOString();
}

export function DateRangeFilter({
  from,
  to,
  onFromChange,
  onToChange,
}: DateRangeFilterProps) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      <label className="flex flex-col gap-1 text-sm">
        <span className="font-medium text-slate-700">Od</span>
        <input
          type="datetime-local"
          value={toInputDateTime(from)}
          onChange={(event) => onFromChange(fromInputDateTime(event.target.value))}
          className="rounded border border-slate-300 bg-white px-3 py-2"
        />
      </label>
      <label className="flex flex-col gap-1 text-sm">
        <span className="font-medium text-slate-700">Do</span>
        <input
          type="datetime-local"
          value={toInputDateTime(to)}
          onChange={(event) => onToChange(fromInputDateTime(event.target.value))}
          className="rounded border border-slate-300 bg-white px-3 py-2"
        />
      </label>
    </div>
  );
}

