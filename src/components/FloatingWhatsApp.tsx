import { Link } from 'react-router-dom'
import { BUSINESS, whatsappLink } from '../data/site'
import { PhoneIcon, WhatsAppIcon } from './Icons'

export function FloatingWhatsApp() {
  return (
    <>
      {/* Desktop floating WhatsApp bubble */}
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener"
        aria-label="Chat with Nitya Nail Art on WhatsApp"
        className="wa-pulse fixed right-7 bottom-7 z-40 hidden h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_-8px_rgba(37,211,102,0.7)] transition-transform hover:scale-110 xl:grid"
      >
        <WhatsAppIcon className="h-7 w-7" />
      </a>

      {/* Mobile Sticky Quick Action Dock (Instant 1-tap call, offers & WhatsApp booking) */}
      <aside aria-label="Mobile quick actions" className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-paper/95 px-3 pt-2 pb-[max(0.6rem,env(safe-area-inset-bottom))] shadow-[0_-8px_25px_rgba(31,25,22,0.12)] backdrop-blur-md xl:hidden">
        <div className="mx-auto flex max-w-md items-center gap-2">
          <a
            href={`tel:${BUSINESS.phone.tel}`}
            className="flex flex-1 items-center justify-center gap-1.5 rounded-sm border border-ink/20 bg-white py-2.5 text-[11px] font-bold tracking-[0.08em] text-ink uppercase shadow-xs transition active:scale-95"
            aria-label="Call studio"
          >
            <PhoneIcon className="h-3.5 w-3.5 text-rose" />
            <span>Call</span>
          </a>

          <Link
            to="/menu"
            className="flex flex-1 items-center justify-center gap-1 rounded-sm border border-ink/20 bg-white py-2.5 text-[11px] font-bold tracking-[0.08em] text-ink uppercase shadow-xs transition active:scale-95"
            aria-label="View menu and offers"
          >
            <span>Offers</span>
          </Link>

          <a
            href={whatsappLink('Hi Nitya Nail Art, I would like to book a nail appointment.')}
            target="_blank"
            rel="noopener"
            className="flex-[1.9] flex items-center justify-center gap-1.5 rounded-sm bg-rose py-2.5 text-[11px] font-bold tracking-[0.08em] text-white uppercase shadow-md transition active:scale-95 hover:bg-rose-deep"
            aria-label="Book on WhatsApp"
          >
            <WhatsAppIcon className="h-3.5 w-3.5" />
            <span>Book on WhatsApp</span>
          </a>
        </div>
      </aside>
    </>
  )
}
