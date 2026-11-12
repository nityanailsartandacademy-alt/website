import { whatsappLink } from '../data/site'
import { WhatsAppIcon } from './Icons'

export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener"
      aria-label="Chat with Nitya Nail Art on WhatsApp"
      className="wa-pulse fixed right-5 bottom-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_-8px_rgba(37,211,102,0.7)] transition-transform hover:scale-110 sm:right-7 sm:bottom-7"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  )
}
