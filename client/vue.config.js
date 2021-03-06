const path = require('path');

module.exports = {
  outputDir: path.resolve(__dirname, '../public'),
  devServer: {
    proxy: {
      '/result': {
        target: 'https://fast-shore-66611.herokuapp.com/',
        changeOrigin: true
      },
    }
  }
}