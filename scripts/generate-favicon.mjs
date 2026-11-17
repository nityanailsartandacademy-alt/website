import fs from 'node:fs'

const imgBase64 = fs.readFileSync('public/images/logo.jpg').toString('base64')
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <defs>
    <clipPath id="logo-circle">
      <circle cx="256" cy="256" r="256" />
    </clipPath>
  </defs>
  <rect width="512" height="512" fill="#000000" rx="256" />
  <image href="data:image/jpeg;base64,${imgBase64}" width="512" height="512" clip-path="url(#logo-circle)" preserveAspectRatio="xMidYMid slice" />
</svg>
`
fs.writeFileSync('public/favicon.svg', svg)
console.log('Favicon SVG generated successfully, byte size:', svg.length)

