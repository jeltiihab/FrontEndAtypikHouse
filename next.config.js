const withPWA = require('next-pwa');

module.exports = withPWA({
    pwa: {
        dest: 'public',
        register: true,
        skipWaiting: true,
    },
images: {
    domains: ['api.f2i-cw1-ij-hc-nag.fr'],
  },
});
