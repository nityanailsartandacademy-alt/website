/* Single source of truth for all business details. Edit here, the whole site updates. */

export const BUSINESS = {
  name: 'Nitya Nail Art & Academy',
  short: 'Nitya',
  tagline: 'Nail Extensions · Nail Art · Academy',
  city: 'Indore',
  area: 'Vijay Nagar',
  addressLines: ['19 GM, Scheme No. 54, Vijay Nagar', 'Opposite Meghdoot Garden', 'Indore, Madhya Pradesh 452010'],
  streetAddress: '19 GM, Scheme No. 54, Vijay Nagar, Opposite Meghdoot Garden',
  postalCode: '452010',
  region: 'Madhya Pradesh',
  geo: { lat: 22.753835, lng: 75.8882225 },
  hours: [
    { days: 'Mon, Wed – Sun', time: '11:00 AM – 8:00 PM' },
    { days: 'Tuesday', time: '11:00 AM – 7:30 PM' },
  ],
  hoursShort: 'Open daily · 11 AM – 8 PM',
  phone: { display: '+91 88715 89233', tel: '+918871589233' },
  whatsapp: { display: '+91 88715 89233', number: '918871589233' },
  instagram: { handle: 'nitya_nail_art__academy', url: 'https://www.instagram.com/nitya_nail_art__academy/' },
  academyInstagram: { handle: 'nityanailacademy', url: 'https://www.instagram.com/nityanailacademy/' },
  rating: { value: 4.5, count: 107 },
  googleUrl: 'https://maps.google.com/?cid=9324890558254009873',
  mapEmbed: 'https://www.google.com/maps?q=NITYA+NAIL+ART+%26+ACADEMY,+Vijay+Nagar,+Indore&z=16&output=embed',
  directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=NITYA+NAIL+ART+%26+ACADEMY+Vijay+Nagar+Indore',
}

export const whatsappLink = (message = 'Hi Nitya Nail Art, I would like to book a nail appointment.') =>
  `https://wa.me/${BUSINESS.whatsapp.number}?text=${encodeURIComponent(message)}`

export const NAV = [
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Menu', href: '/menu' },
  { label: 'Academy', href: '/academy' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'Contact', href: '/contact' },
]

/* ---------- Services ---------- */

export type Service = { id: string; title: string; text: string; image: string; from: string; category: string }

export const SERVICE_CATEGORIES = ['Nail extensions', 'Nail art', 'Overlays & polish', 'Toe nails'] as const

export const SERVICES: Service[] = [
  { id: 'gel', category: 'Nail extensions', title: 'Gel nail extensions', text: 'Lightweight, glossy and natural-looking length that lasts around 20 days.', image: '/images/svc-gel.webp', from: '₹699' },
  { id: 'acrylic', category: 'Nail extensions', title: 'Acrylic extensions', text: 'Our strongest, longest-lasting set — about a month of flawless wear.', image: '/images/svc-acrylic.webp', from: '₹1,250' },
  { id: 'art', category: 'Nail art', title: 'Custom nail art', text: 'Florals, ombré, chrome, French tips, cat-eye and 3D — designed around you.', image: '/images/svc-art.webp', from: '₹50 / nail' },
  { id: 'french', category: 'Nail art', title: 'French & chrome', text: 'Clean classic French tips, mirror chrome and glazed finishes.', image: '/images/svc-french.webp', from: '₹50 / nail' },
  { id: 'overlay', category: 'Overlays & polish', title: 'Gel & acrylic overlays', text: 'Strengthen your natural nails with a durable overlay and free polishing.', image: '/images/svc-overlay.webp', from: '₹599' },
  { id: 'toe', category: 'Toe nails', title: 'Toe nail extensions', text: 'Toe gel polish, extensions and overlays to match your hands.', image: '/images/svc-toe.webp', from: '₹400' },
]

/* ---------- Menu & prices (as published on the studio's Google profile) ---------- */

export type MenuItem = { name: string; price: string; note?: string }
export type MenuGroup = { id: string; title: string; intro: string; extra?: string; items: MenuItem[] }

export const MENU: MenuGroup[] = [
  {
    id: 'extensions',
    title: 'Nail extensions',
    intro: 'Every extension set includes polishing.',
    extra: 'Nail art extra · ₹50 per finger',
    items: [
      { name: 'Temporary nail extensions', price: '₹400', note: 'Lasts about 10 days' },
      { name: 'Korean gel extensions', price: '₹600', note: 'Lasts about 15 days' },
      { name: 'Gel nail extensions', price: '₹699', note: 'Lasts about 20 days' },
      { name: 'Acrylic nail extensions', price: '₹1,250', note: 'Lasts about 1 month' },
    ],
  },
  {
    id: 'overlays',
    title: 'Overlays & polish',
    intro: 'Strength and shine for your natural nails.',
    extra: 'Nail art extra · ₹50 per finger',
    items: [
      { name: 'Gel nail polish', price: '₹300', note: 'No lasting guarantee' },
      { name: 'Gel overlay', price: '₹599', note: 'Free polishing' },
      { name: 'Acrylic overlay', price: '₹999', note: 'Free polishing' },
    ],
  },
  {
    id: 'toes',
    title: 'Toe nails',
    intro: 'Matching care for your feet.',
    extra: 'Nail art extra · ₹30 per toe',
    items: [
      { name: 'Toe gel polishing', price: '₹400' },
      { name: 'Toe extensions', price: '₹600' },
      { name: 'Toe gel overlay', price: '₹600' },
      { name: 'Toe acrylic overlay', price: '₹999' },
    ],
  },
]

/* ---------- Academy ---------- */

export const COURSE = {
  name: 'Basic to Professional Nail Course',
  price: '₹10,000',
  regular: '₹12,000',
  registration: '₹300',
  perks: ['Basic to advanced nail art', 'Complete practical training', 'All practice products provided', 'Live model practice', 'Certificate on completion'],
  modules: [
    { title: 'Foundations', items: ['Nail anatomy', 'Nail preparation', 'All nail shapes', 'Product & tools knowledge', 'Tool cleaning & hygiene'] },
    {
      title: 'Extensions',
      items: ['Gel extension & refilling', 'Acrylic extension & refilling', 'Korean extension', 'Full tip extension', 'Polygel extension', 'Builder gel overlay', 'Toe extension'],
    },
    {
      title: 'Nail art techniques',
      items: ['French tip', 'Chrome & mirror chrome', 'Ombré', 'Cat eye', 'Marble & multi-marble', 'Foil, glitter & sugar dust', 'Blooming gel', 'Emboss & carving gel', 'Spider art & line art', 'Animal prints', 'Stone work', '3D & 4D art'],
    },
    { title: 'Business skills', items: ['Pricing structure', 'How to photograph your work', 'Building your client base'] },
  ],
}

/* ---------- Why clients return ---------- */

export const PILLARS = [
  { no: '01', title: 'Hygiene first', text: 'Clean tools, careful prep and a calm, tidy studio for every appointment.' },
  { no: '02', title: 'Artists who listen', text: 'We help you choose the shape, colour and art that suits your hands.' },
  { no: '03', title: 'Sets that last', text: 'Neat structure and finishing — clients say their nails survive daily housework.' },
  { no: '04', title: 'Honest pricing', text: 'Published prices and affordable sets without cutting corners on quality.' },
]

/* ---------- Reviews (Google) ---------- */

export const REVIEWS = [
  {
    name: 'Gunjan Hillal',
    service: 'Nail extensions',
    text: 'Over a month later, even after all my regular household work, my nails stayed perfectly intact. The removal was just as professional — no damage, no discomfort. Saloni is extremely skilled, polite and attentive.',
  },
  {
    name: 'Apoorva Gupta',
    service: 'Nail extensions',
    text: "Visited the studio twice. The girl who does your nails is very polite and patient. I had zero knowledge of nails — she helped me pick the colour and art that suited me best. Price-wise you won't be disappointed.",
  },
  {
    name: 'Vinayak Bodana',
    service: 'Ombré extensions',
    text: 'Obsessed with my pointed ombré nail extensions! The ombré is beautifully blended. The artist did a very neat job and paid attention to every detail.',
  },
  {
    name: 'Deepika Sharma',
    service: 'Nail art',
    text: 'Saloni did an excellent job and was extremely patient, paying attention to every small detail. Very affordable without compromising on quality — definitely one of the best salons in Indore.',
  },
  {
    name: 'Harshi Jain',
    service: 'Nail art course',
    text: 'I learned nail art here and they teach very well. Students can use all the products easily, and they patiently solve every doubt. I learned many new techniques.',
  },
  {
    name: 'Simran Saini',
    service: 'Nail art & extensions',
    text: 'The technician is incredibly skilled and detail-oriented. My nails turned out exactly how I wanted — clean, precise and long-lasting. Hygiene and ambiance were top-notch.',
  },
  {
    name: 'Shruti Singh',
    service: 'Nail art',
    text: "The finishing is beautiful and the nails are done exactly the way I wanted. The service is affordable and long-lasting. Highly recommended!",
  },
  {
    name: 'Palak Goswami',
    service: 'Nail art course',
    text: 'I did the nail art course here and had a great experience. The teaching is clear and practical, and the trainers are supportive and give personal attention to every student.',
  },
]

export const REVIEW_TAGS = [
  { label: 'Nail art course', count: 9 },
  { label: 'Nail extensions', count: 9 },
  { label: 'Affordability', count: 6 },
  { label: 'Polite staff', count: 6 },
  { label: 'Designs', count: 5 },
  { label: 'Friendly environment', count: 4 },
]

/* ---------- Gallery ---------- */

export const GALLERY = [
  { src: '/images/g01.webp', alt: 'Soft pink almond extensions with white tips', w: 907, h: 1000 },
  { src: '/images/g06.webp', alt: 'Burgundy nail art with heart details', w: 675, h: 900 },
  { src: '/images/g11.webp', alt: 'French tips with hand-painted yellow flowers', w: 675, h: 900 },
  { src: '/images/g03.webp', alt: 'Glossy deep maroon gel extensions', w: 675, h: 900 },
  { src: '/images/g08.webp', alt: 'Pink ombré almond nails', w: 675, h: 900 },
  { src: '/images/g02.webp', alt: 'Plum glitter nail set', w: 675, h: 900 },
  { src: '/images/g05.webp', alt: 'Powder blue French tip extensions', w: 570, h: 900 },
  { src: '/images/g12.webp', alt: 'Neon yellow square gel extensions', w: 675, h: 900 },
  { src: '/images/g04.webp', alt: 'Pink coffin nails with white French and chrome', w: 675, h: 900 },
  { src: '/images/g07.webp', alt: 'Lilac and white French extensions', w: 539, h: 900 },
  { src: '/images/g10.webp', alt: 'Pastel pink almond extensions', w: 675, h: 900 },
  { src: '/images/g13.webp', alt: 'Pink and white swirl nail art', w: 675, h: 900 },
  { src: '/images/g09.webp', alt: 'Nude pink extensions with fine line art', w: 675, h: 900 },
  { src: '/images/g14.webp', alt: 'Inside the Nitya Nail Art studio, Vijay Nagar', w: 750, h: 1000 },
  { src: '/images/g15.webp', alt: 'Studio entrance decorated with pink balloons', w: 686, h: 900 },
  { src: '/images/g16.webp', alt: 'Academy student receiving her nail course certificate', w: 682, h: 900 },
]

/* ---------- Per-page SEO. Each path is prerendered to its own HTML file. ---------- */

export type PageMeta = { path: string; title: string; description: string }

export const PAGE_META: Record<string, PageMeta> = {
  '/': {
    path: '/',
    title: 'Nitya Nail Art & Academy | Nail Extensions & Nail Art Course in Vijay Nagar, Indore',
    description:
      'Nitya Nail Art & Academy, Vijay Nagar, Indore — gel, acrylic & Korean nail extensions, custom nail art and a certified Basic to Professional nail course. Rated 4.5★ on Google.',
  },
  '/about': {
    path: '/about',
    title: 'About Nitya Nail Art & Academy | Women-owned Nail Studio, Indore',
    description: 'A women-owned nail studio and academy in Vijay Nagar, Indore — hygiene-first service, artists who listen and nail sets that last.',
  },
  '/services': {
    path: '/services',
    title: 'Nail Services in Indore — Gel, Acrylic & Korean Extensions, Nail Art | Nitya',
    description: 'Gel and acrylic nail extensions, Korean extensions, custom nail art, French & chrome, overlays and toe nails at Nitya Nail Art, Vijay Nagar, Indore.',
  },
  '/menu': {
    path: '/menu',
    title: 'Nail Price List Indore — Extensions from ₹400 | Nitya Nail Art',
    description: 'Nitya Nail Art price list: temporary extensions ₹400, Korean gel ₹600, gel extensions ₹699, acrylic ₹1,250, overlays and toe nails. Nail art from ₹50 per finger.',
  },
  '/academy': {
    path: '/academy',
    title: 'Nail Art Course in Indore — Basic to Professional, Certified | Nitya Academy',
    description: 'Learn gel, acrylic & Korean extensions and 40+ nail art techniques with practical training, products provided and a certificate. Vijay Nagar, Indore.',
  },
  '/gallery': {
    path: '/gallery',
    title: 'Nail Art Gallery — Extensions & Designs | Nitya Nail Art Indore',
    description: 'Browse nail extensions, French tips, ombré, chrome and custom nail art created at Nitya Nail Art & Academy, Vijay Nagar, Indore.',
  },
  '/reviews': {
    path: '/reviews',
    title: 'Reviews — 4.5★ on Google | Nitya Nail Art & Academy Indore',
    description: 'Read what clients and students say about Nitya Nail Art & Academy — rated 4.5★ from 107 Google reviews.',
  },
  '/contact': {
    path: '/contact',
    title: 'Contact & Book — Nitya Nail Art & Academy, Vijay Nagar, Indore',
    description: 'Book on WhatsApp +91 88715 89233. 19 GM, Scheme No. 54, Vijay Nagar, opposite Meghdoot Garden, Indore. Open daily 11 AM – 8 PM.',
  },
}

export const NOT_FOUND_META: PageMeta = {
  path: '/404',
  title: 'Page not found | Nitya Nail Art & Academy',
  description: 'This page does not exist. Explore Nitya Nail Art & Academy, Vijay Nagar, Indore.',
}
