const path = require('path');

module.exports = {
  outputDir: path.resolve(__dirname, '../public'),
  devServer: {
    proxy: {
      '/result': {
        target: 'http://localhost:5000',
        changeOrigin: true
      },
    }
  }
}