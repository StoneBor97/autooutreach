// next.config.js

module.exports = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }, // Ažuriramo cache-control zaglavlje
          { key: 'X-Content-Type-Options', value: 'nosniff' } // Dodajemo X-Content-Type-Options zaglavlje
        ]
      }
    ]
  }
}
