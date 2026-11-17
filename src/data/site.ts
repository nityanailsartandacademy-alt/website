/* Single source of truth for all business details. Edit here, the whole site updates. */

export const BUSINESS = {
  name: 'Nitya Nail Art & Academy',
  short: 'Nitya',
  tagline: 'Nail Extensions · Nail Art · Academy',
  city: 'Indore',
  area: 'Vijay Nagar',
  addressLines: [
    '19 GM & 247 FH, Scheme No. 54, Vijay Nagar',
    'Opposite Meghdoot Garden',
    'Indore, Madhya Pradesh 452010',
  ],
  streetAddress: '19 GM & 247 FH, Scheme No. 54, Vijay Nagar, Opposite Meghdoot Garden',
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
  { label: 'Menu & Offers', href: '/menu' },
  { label: 'Academy', href: '/academy' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'Contact', href: '/contact' },
]

/* ---------- Bridal Special Package (Image 2) ---------- */

export const BRIDAL_PACKAGE = {
  badge: 'Special Bridal Package',
  title: 'Bridal Booking for Your Special Day',
  tagline: 'Complete Bridal Glam · Long Lasting · Premium Finish',
  price: '₹2,100',
  priceSuffix: 'Only',
  image: '/images/offers/bridal-package.jpg',
  highlights: [
    { title: 'Gel Nail Extensions', finish: 'with Cat Eye Finish', icon: '💅' },
    { title: 'Toe Nail Polishing', finish: 'with Cat Eye Finish', icon: '✨' },
  ],
  perks: [
    'Gel Nail Extensions on Hands with Cat Eye Finish',
    'Toe Nail Polishing with Matching Cat Eye Finish',
    'Premium Salon Quality Finish',
    'Long-Lasting Formula for All Wedding Rituals',
    'Complete Bridal Glam Styled Around Your Outfit',
  ],
  whatsappMessage: 'Hi Nitya Nail Art, I want to book the Bridal Special Package (@ ₹2,100 only) for my wedding/event.',
}

/* ---------- Wedding Season Special Offers (Images 1 & 4) ---------- */

export const WEDDING_SEASON_SPECIAL = {
  eyebrow: 'Wedding Season Special',
  title: 'Premium Nail Services with Professional Finish',
  description:
    'Exclusive promotional rates on nail extensions, overlays, and toe care in Vijay Nagar, Indore. Crafted with professional products, hygienic tools, and skilled artists.',
  badges: ['Professional Products', 'Hygienic Tools', 'Skilled Artist'],
  artExtraNote: 'Nail Art Extra: ₹30 to ₹50 per finger / toe',
  lightPoster: '/images/offers/wedding-special-light.jpg',
  darkPoster: '/images/offers/wedding-special-dark.jpg',
}

/* ---------- Services ---------- */

export type Service = {
  id: string
  title: string
  text: string
  image: string
  from: string
  regularPrice?: string
  duration?: string
  category: string
  badge?: string
}

export const SERVICE_CATEGORIES = ['Nail extensions', 'Nail art', 'Overlays & polish', 'Toe nails', 'Bridal special'] as const

export const SERVICES: Service[] = [
  {
    id: 'bridal',
    category: 'Bridal special',
    title: 'Bridal Special Package',
    text: 'Complete hands and toes package: Gel nail extensions with Cat Eye finish + Toe nail polishing with Cat Eye finish.',
    image: '/images/offers/bridal-package.jpg',
    from: '₹2,100',
    duration: 'Hands & Toes Set',
    badge: 'Popular',
  },
  {
    id: 'gel',
    category: 'Nail extensions',
    title: 'Gel nail extensions + Polishing',
    text: 'Lightweight, glossy and natural-looking length with free polishing. Lasts approximately 20 days.',
    image: '/images/real-burgundy-polka-fur.jpg',
    from: '₹699',
    regularPrice: '₹799',
    duration: 'Lasts 20 Days',
  },
  {
    id: 'korean',
    category: 'Nail extensions',
    title: 'Korean gel extensions + Polishing',
    text: 'Ultra-thin, crystal-clear aesthetic length with free polishing. Lasts approximately 15 days.',
    image: '/images/real-nude-gold-contour.jpg',
    from: '₹599',
    regularPrice: '₹699',
    duration: 'Lasts 15 Days',
  },
  {
    id: 'temporary',
    category: 'Nail extensions',
    title: 'Temporary nail extensions + Polishing',
    text: 'Quick glam for parties, weddings and short-term celebrations. Lasts approximately 10 days.',
    image: '/images/real-french-polka-flower.jpg',
    from: '₹399',
    regularPrice: '₹499',
    duration: 'Lasts 10 Days',
  },
  {
    id: 'acrylic',
    category: 'Nail extensions',
    title: 'Acrylic nail extensions + Polishing',
    text: 'Our strongest, longest-lasting set with free polishing — about 1 month of flawless wear.',
    image: '/images/real-matte-gloss-black.jpg',
    from: '₹1,099',
    regularPrice: '₹1,399',
    duration: 'Lasts 1 Month',
  },
  {
    id: 'gel-polish',
    category: 'Overlays & polish',
    title: 'Gel nail polish',
    text: 'Glossy salon gel coat directly on your natural nails. (No lasting guarantee).',
    image: '/images/real-toe-pink-rings.jpg',
    from: '₹249',
    regularPrice: '₹349',
  },
  {
    id: 'gel-overlay',
    category: 'Overlays & polish',
    title: 'Gel overlay',
    text: 'Strengthen and protect natural nails with a crystal gel coat. Includes free polishing.',
    image: '/images/real-french-polka-flower.jpg',
    from: '₹699',
    duration: 'Free Polishing Included',
  },
  {
    id: 'acrylic-overlay',
    category: 'Overlays & polish',
    title: 'Acrylic overlay',
    text: 'Extra durability for weak or brittle nails with high gloss. Includes free polishing.',
    image: '/images/real-burgundy-polka-silk.jpg',
    from: '₹999',
    regularPrice: '₹1,199',
    duration: 'Free Polishing Included',
  },
  {
    id: 'art',
    category: 'Nail art',
    title: 'Custom nail art & 3D designs',
    text: 'Florals, ombré, chrome, cat eye, marble, spider art, animal prints, stones and 3D/4D art.',
    image: '/images/real-art-3d-floral.jpg',
    from: '₹30 – ₹50 / finger',
  },
  {
    id: 'toe-services',
    category: 'Toe nails',
    title: 'Toe extensions & gel overlays',
    text: 'Matching toe gel polishing (₹399), toe extensions (₹699), gel overlays (₹699) & acrylic overlays (₹1,099).',
    image: '/images/real-toe-pink-rings-wide.jpg',
    from: '₹399',
    regularPrice: '₹499',
  },
]

/* ---------- Menu & Prices (Wedding Season Special) ---------- */

export type MenuItem = {
  name: string
  price: string
  regularPrice?: string
  durability?: string
  note?: string
  extra?: string
  highlight?: boolean
}

export type MenuGroup = {
  id: string
  title: string
  intro: string
  extra?: string
  items: MenuItem[]
}

export const MENU: MenuGroup[] = [
  {
    id: 'extensions',
    title: 'Nail extensions',
    intro: 'All extensions include free polishing. Professional products & hygienic application.',
    extra: 'Nail Art Extra: ₹30 to ₹50 per finger',
    items: [
      {
        name: 'Gel nail polish',
        price: '₹249',
        regularPrice: '₹349',
        durability: 'Express polish',
        note: 'No lasting guarantee',
      },
      {
        name: 'Temporary nail extensions + Polishing',
        price: '₹399',
        regularPrice: '₹499',
        durability: 'Lasts 10 Days',
        extra: 'Nail Art Extra – ₹30/Finger',
      },
      {
        name: 'Korean gel extensions + Polishing',
        price: '₹599',
        regularPrice: '₹699',
        durability: 'Lasts 15 Days',
        extra: 'Nail Art Extra – ₹30/Finger',
      },
      {
        name: 'Gel nail extensions + Polishing',
        price: '₹699',
        regularPrice: '₹799',
        durability: 'Lasts 20 Days',
        extra: 'Nail Art Extra – ₹30/Finger',
        highlight: true,
      },
      {
        name: 'Acrylic nail extensions + Polishing',
        price: '₹1,099',
        regularPrice: '₹1,399',
        durability: 'Lasts 1 Month',
        extra: 'Nail Art Extra – ₹30/Finger',
        highlight: true,
      },
    ],
  },
  {
    id: 'overlays',
    title: 'Overlay services',
    intro: 'Strengthen your natural nails. Both gel and acrylic overlays include free polishing.',
    extra: 'Nail Art Extra: ₹30 to ₹50 per finger',
    items: [
      {
        name: 'Gel overlay',
        price: '₹699',
        note: 'Free Polishing included',
        extra: 'Nail Art Extra – ₹30/Finger',
      },
      {
        name: 'Acrylic overlay',
        price: '₹999',
        regularPrice: '₹1,199',
        note: 'Free Polishing included',
        extra: 'Nail Art Extra – ₹30/Finger',
        highlight: true,
      },
    ],
  },
  {
    id: 'toes',
    title: 'Toe services',
    intro: 'Matching luxury toe extensions, overlays and gel polishing for feet.',
    extra: 'Art Extra: ₹30 per finger/toe',
    items: [
      {
        name: 'Toe gel polishing',
        price: '₹399',
        regularPrice: '₹499',
        extra: 'Art Extra – ₹30/Finger',
      },
      {
        name: 'Toe extensions',
        price: '₹699',
        extra: 'Art Extra – ₹30/Finger',
      },
      {
        name: 'Toe gel overlay',
        price: '₹699',
        extra: 'Art Extra – ₹30/Finger',
      },
      {
        name: 'Toe acrylic overlay',
        price: '₹1,099',
        regularPrice: '₹1,199',
        extra: 'Art Extra – ₹30/Finger',
      },
    ],
  },
]

/* ---------- Academy (Bumper Offer & Full 40+ Curriculum from Image 3) ---------- */

export const COURSE = {
  name: 'Basic to Professional Nail Course',
  taglineHindi: 'सपने आपके, सफलता हमारी!',
  sublineHindi: 'सीखें प्रोफेशनल नेल आर्ट अब कम फीस में!',
  offerBadge: 'BUMPER OFFER! LIMITED TIME OFFER',
  price: '₹8,500',
  regular: '₹10,000',
  savings: 'Save ₹1,500',
  posterImage: '/images/offers/academy-course.jpg',
  perks: [
    '100% Practical Training',
    'All Practice Products Provided',
    'Certificate Provided on Completion',
    'Expert Guidance from Senior Nail Artists',
    'Lifetime Support & Doubt Solving',
    'Live Model Hands-on Practice',
  ],
  modules: [
    {
      title: 'Foundations & Nail Prep',
      description: 'Master nail anatomy, shaping, product science and sanitation hygiene.',
      items: [
        'Introduction to Nail Anatomy',
        'Nail Preparation',
        'All Types of Shape',
        'Product Knowledge',
        'Tools Knowledge',
        'Tools Cleaning and Hygiene Tips',
      ],
    },
    {
      title: 'Complete Extension Systems',
      description: 'Hands-on training for gel, acrylic, Korean, polygel and tip extensions.',
      items: [
        'Gel Extension',
        'Gel Extension Refilling',
        'Gel Polish on Gel Extension',
        'Acrylic Extension',
        'Acrylic Extension Refilling',
        'Gel Polish on Acrylic Extension',
        'Korean Extension',
        'Full Tip Extension',
        'Polygel Extension',
        'Overlay of Builder Gel',
        'Gel Polish on Natural Nails',
        'Toe Extension',
        'Emboss with Acrylic',
      ],
    },
    {
      title: 'Signature Art & Trending Styles',
      description: 'Master lines, chrome, French, marble and precision brush techniques.',
      items: [
        'French Tip',
        'Classic Mirror Chrome',
        'Chrome Design',
        'Spider Art',
        'Sugar Dust',
        'Line Arts',
        'Swirls',
        'Marble Nails',
        'Multi Marble',
        'Tape Art',
        'Emboss with Gel',
      ],
    },
    {
      title: 'Advanced Effects & 3D/4D Textures',
      description: 'Specialized wedding and editorial techniques for high-ticket client sets.',
      items: [
        '5 Types of Animal Print (Zebra, Leopard, Cat, Cow, Snake)',
        'Glitter Applications',
        'Blooming Gel',
        'Ombre',
        'Cat Eye Finish',
        'Foil Art',
        'Stone Work',
        'Carving Gel',
        '3D & 4D Arts',
      ],
    },
    {
      title: 'Live Practice & Business Skills',
      description: 'Everything you need to launch a profitable salon or freelance career.',
      items: [
        'Live Model Practice',
        'In-Class Notes Provided',
        'Salon & Freelance Pricing Structure',
        'How to Click Professional Photos for Instagram',
        'Client Consultation & Retention Tips',
      ],
    },
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
    text: 'The finishing is beautiful and the nails are done exactly the way I wanted. The service is affordable and long-lasting. Highly recommended!',
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
]

/* ---------- Gallery works ---------- */

export const GALLERY = [
  { src: '/images/real-nude-gold-contour.jpg', alt: 'Nude pink almond extensions with gold contour line art', tag: 'Gold contour', w: 768, h: 1024 },
  { src: '/images/real-art-3d-floral.jpg', alt: '3D floral nail art with chrome tips and rhinestones', tag: '3D floral', w: 768, h: 1024 },
  { src: '/images/real-burgundy-polka-fur.jpg', alt: 'Burgundy nails with white polka dots and delicate bow accents', tag: 'Burgundy dots', w: 768, h: 1024 },
  { src: '/images/real-matte-gloss-black.jpg', alt: 'Matte black stiletto extensions with glossy tip contrast', tag: 'Matte black', w: 768, h: 1024 },
  { src: '/images/real-french-polka-flower.jpg', alt: 'Burgundy French tips with hand-painted mini flowers', tag: 'French floral', w: 768, h: 1024 },
  { src: '/images/real-toe-pink-rings.jpg', alt: 'Glossy soft-pink toe gel polish with toe rings', tag: 'Toe polish', w: 768, h: 1024 },
  { src: '/images/real-art-3d-floral-angle.jpg', alt: 'Detailed angle of 3D sculpted floral nail extensions', tag: 'Sculpted art', w: 768, h: 1024 },
  { src: '/images/real-burgundy-polka-silk.jpg', alt: 'Deep wine burgundy extensions on satin silk background', tag: 'Wine set', w: 768, h: 1024 },
  { src: '/images/real-toe-pink-rings-wide.jpg', alt: 'Full set of soft-pink polished toe extensions with ring jewelry', tag: 'Toe extensions', w: 768, h: 1024 },
]

/* ---------- Per-page SEO metadata ---------- */

export type PageMeta = {
  path: string
  title: string
  description: string
}

export const PAGES: PageMeta[] = [
  {
    path: '/',
    title: 'Nitya Nail Art & Academy | Nail Extensions & Nail Art Course in Vijay Nagar, Indore',
    description:
      'Nitya Nail Art & Academy, Vijay Nagar, Indore — Wedding Season Special from ₹249, Bridal Package @ ₹2,100, and certified Basic to Professional Nail Course @ ₹8,500. Rated 4.5★ on Google.',
  },
  {
    path: '/about',
    title: 'About Us | Nitya Nail Art & Academy — Vijay Nagar, Indore',
    description:
      'Meet Nitya Nail Art & Academy: a women-owned nail studio and academy in Vijay Nagar, Indore, dedicated to clean technique, honest pricing and certified courses.',
  },
  {
    path: '/services',
    title: 'Nail Services in Indore — Bridal Package ₹2,100, Extensions & Nail Art | Nitya',
    description:
      'Wedding Season Special: Bridal Package ₹2,100, Gel extensions ₹699, Acrylic extensions ₹1,099, overlays and toe services at Nitya Nail Art, Vijay Nagar, Indore.',
  },
  {
    path: '/menu',
    title: 'Nail Price List & Offers Indore — Extensions from ₹249 | Nitya Nail Art',
    description:
      'Official Wedding Season Special price list: Gel polish ₹249, Temp extensions ₹399, Korean extensions ₹599, Gel ₹699, Acrylic ₹1,099, Overlays & Toe services.',
  },
  {
    path: '/academy',
    title: 'Nail Art Course in Indore — Basic to Professional @ ₹8,500 Bumper Offer | Nitya',
    description:
      'Bumper Offer ₹8,500 (was ₹10,000): 40+ nail art techniques, 100% practical training, products provided, live model practice and certificate. Vijay Nagar, Indore.',
  },
  {
    path: '/gallery',
    title: 'Nail Art Gallery — Extensions, Bridal Sets & Designs | Nitya Nail Art Indore',
    description:
      'Browse nail extensions, Cat Eye bridal sets, French tips, ombré, chrome and custom nail art created at Nitya Nail Art & Academy, Vijay Nagar, Indore.',
  },
  {
    path: '/reviews',
    title: 'Reviews — 4.5★ on Google | Nitya Nail Art & Academy Indore',
    description:
      'Read what clients and students say about Nitya Nail Art & Academy — rated 4.5★ from 107 Google reviews.',
  },
  {
    path: '/contact',
    title: 'Contact & Book — Nitya Nail Art & Academy, Vijay Nagar, Indore',
    description:
      'Book on WhatsApp +91 88715 89233. 19 GM & 247 FH, Scheme No. 54, Vijay Nagar, opposite Meghdoot Garden, Indore. Open daily 11 AM – 8 PM.',
  },
]

export const NOT_FOUND_META: PageMeta = {
  path: '/404',
  title: 'Page not found | Nitya Nail Art & Academy',
  description: 'This page does not exist. Explore Nitya Nail Art & Academy, Vijay Nagar, Indore.',
}

export const PAGE_META: Record<string, PageMeta> = Object.fromEntries(PAGES.map((p) => [p.path, p]))

