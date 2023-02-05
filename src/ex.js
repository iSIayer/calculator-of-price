const data = {
  scaleway: {
    price: {
      storage: {
        multi: 0.06,
        single: 0.03,
      },
      transfer: 0.02,
      free: 75,
    },
    slug: 'scaleway.com',
  },
  bunny: {
    price: {
      storage: {
        HDD: 0.01,
        SSD: 0.02,
      },
      transfer: 0.01,
      max: 10,
    },
    slug: 'bunny.net',
  },
  vultr: {
    price: {
      storage: 0.01,
      transfer: 0.01,
      min: 5,
    },
    slug: 'vultr.com',
  },
  backblaze: {
    price: {
      storage: 0.005,
      transfer: 0.01,
      min: 7,
    },
    slug: 'backblaze.com',
  },
};
