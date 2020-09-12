module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/:slug*',
        destination: 'https://santehnika-online.ru/:slug*',
      },
    ];
  },
};
