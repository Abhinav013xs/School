export default function Loading() {
  return (
    <div className="flex-1 flex items-center justify-center p-12 min-h-[50vh]">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-10 h-10 border-3 border-academic-green/20 border-t-saffron-gold rounded-full animate-spin" />
        <p className="text-sm font-medium text-charcoal-muted">Loading Spring Dales Academy...</p>
      </div>
    </div>
  );
}
