/** Wordmark: italic serif "Nitya" with a small letter-spaced subline, plus a round rose monogram. */
export function Logo({ tone = 'dark' }: { tone?: 'dark' | 'light' }) {
  return (
    <span className="inline-flex items-center gap-3">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-rose font-serif text-[26px] text-white italic shadow-[0_6px_16px_-6px_rgba(212,86,125,0.8)]">
        N
      </span>
      <span className="flex flex-col leading-none">
        <span className={`font-serif text-[30px] italic ${tone === 'dark' ? 'text-ink' : 'text-white'}`}>Nitya</span>
        <span className={`mt-0.5 text-[8.5px] font-bold tracking-[0.3em] uppercase ${tone === 'dark' ? 'text-ink/60' : 'text-white/60'}`}>
          Nail Art & Academy
        </span>
      </span>
    </span>
  )
}
