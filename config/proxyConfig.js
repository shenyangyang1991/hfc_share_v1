module.exports = {
  proxy: {
    '/v1': {
      target: 'https://api.hfc.highfaner.com',
      secure: false,
      changeOrigin: true,
    }
  }
}
