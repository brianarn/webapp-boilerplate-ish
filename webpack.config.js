module.exports = {
  app: {
    entry: './lib/client/index.js',
    output: {
      path: __dirname + '/public/js',
      filename: 'index.js'
    }
  }
};
