export default function Loading() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center" role="status" aria-live="polite">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-teal-200 border-t-teal-700" />
      <span className="sr-only">Loading…</span>
    </div>
  );
}
