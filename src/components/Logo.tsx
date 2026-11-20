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
    sm: 'h-8 w-8 sm:h-9 sm:w-9',
    md: 'h-10 w-10 sm:h-12 sm:w-12',
    lg: 'h-14 w-14 sm:h-20 sm:w-20',
    xl: 'h-20 w-20 sm:h-28 sm:w-32',
  }

  const titleSizes = {
    sm: 'text-[20px] sm:text-[22px]',
    md: 'text-[24px] sm:text-[30px]',
    lg: 'text-[32px] sm:text-[44px]',
    xl: 'text-[42px] sm:text-[56px]',
  }

  const sublineSizes = {
    sm: 'text-[6.5px] sm:text-[7px]',
    md: 'text-[7.5px] sm:text-[8.5px]',
    lg: 'text-[9px] sm:text-[11px]',
    xl: 'text-[11px] sm:text-[12px]',
  }

  return (
    <span className={`inline-flex items-center gap-2.5 sm:gap-3.5 ${className}`}>
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
