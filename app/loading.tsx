export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-emerald-50/30 dark:from-black dark:to-emerald-950/20">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-600 animate-pulse" />
        <p className="text-muted-foreground animate-pulse">Loading Mumbai CivicSense...</p>
      </div>
    </div>
  );
}