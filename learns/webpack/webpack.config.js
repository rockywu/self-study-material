const path = require('path');

module.exports = {
  entry: path.join(__dirname, './src/index'),
  output: {
    filename: 'main.js',
    path:  path.join(__dirname, './dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: path.join(__dirname, './loader/js.my.loader.js'),
            options: {
              /* ... */
            },
          },
        ],
      },
    ],
  },
};
