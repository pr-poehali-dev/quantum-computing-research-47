export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="flex items-center gap-1">
        <span className="text-xl font-bold tracking-tight">#безопасностиЧУТТ</span>
      </div>
    </div>
  )
}