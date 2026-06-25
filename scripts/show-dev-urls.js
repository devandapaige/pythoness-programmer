const os = require('os')

function getLocalIPv4Addresses() {
  const addresses = []
  const interfaces = os.networkInterfaces()
  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name] || []) {
      if (iface.family === 'IPv4' && !iface.internal) {
        addresses.push(iface.address)
      }
    }
  }
  return addresses
}

const port = process.env.PORT || 3000
const ips = getLocalIPv4Addresses()

console.log('\nDev server URLs')
console.log(`  Desktop: http://localhost:${port}`)
if (ips.length === 0) {
  console.log('  Mobile:  (no LAN IP found — use localhost on this machine)')
} else {
  for (const ip of ips) {
    console.log(`  Mobile:  http://${ip}:${port}`)
  }
}
console.log('\nPhone testing: run npm run dev:mobile, then open a Mobile URL above.')
console.log('If hydration fails, add your IP to allowedDevOrigins in next.config.js\n')
