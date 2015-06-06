module.exports = {
  app: {
    entry: './lib/client/index.jsx',
    output: {
      path: __dirname + '/public/js',
      filename: 'index.js'
    },
    module: {
      loaders: [
        {
          test: /\.jsx$/,
          loader: 'jsx-loader?insertPragma=React.DOM&harmony'
        }
      ]
    }
  }
};
