export default function Loading() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div
        className="h-12 w-12 animate-spin rounded-full border-4 border-electric/40 border-t-electric"
        aria-label="Loading"
      />
    </div>
  );
}
