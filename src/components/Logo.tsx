export function Logo({
  tone = 'dark',
  size = 'md',
  showText = true,
  className = '',
}: {
  tone?: 'dark' | 'light'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  showText?: boolean
  className?: string
}) {
  const imgSizes = {
    sm: 'h-9 w-9',
    md: 'h-11 w-11 sm:h-12 sm:w-12',
    lg: 'h-16 w-16 sm:h-20 sm:w-20',
    xl: 'h-24 w-24 sm:h-32 sm:w-32',
  }

  const titleSizes = {
    sm: 'text-[22px]',
    md: 'text-[28px] sm:text-[30px]',
    lg: 'text-[36px] sm:text-[44px]',
    xl: 'text-[48px] sm:text-[56px]',
  }

  const sublineSizes = {
    sm: 'text-[7px]',
    md: 'text-[8.5px]',
    lg: 'text-[10px] sm:text-[11px]',
    xl: 'text-[12px]',
  }

  return (
    <span className={`inline-flex items-center gap-3.5 ${className}`}>
      <img
        src="/images/logo.jpg"
        alt="Nitya Nail Art & Academy Logo"
        className={`${imgSizes[size]} shrink-0 rounded-full object-cover shadow-[0_4px_14px_-2px_rgba(0,0,0,0.4)] ring-1 ${tone === 'dark' ? 'ring-ink/15' : 'ring-white/20'
          } transition-transform duration-300 group-hover:scale-105`}
      />
      {showText && (
        <span className="flex flex-col leading-none">
          <span className={`font-serif italic leading-none ${titleSizes[size]} ${tone === 'dark' ? 'text-ink' : 'text-white'}`}>
            Nitya
          </span>
          <span
            className={`mt-1 font-bold tracking-[0.3em] uppercase ${sublineSizes[size]} ${tone === 'dark' ? 'text-ink/60' : 'text-white/65'
              }`}
          >
            Nail Art & Academy
          </span>
        </span>
      )}
    </span>
  )
}
