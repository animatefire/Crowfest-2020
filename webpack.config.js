const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const autoprefixer = require('autoprefixer');

module.exports = {
  entry: './src/main.js',
  devtool: 'inline-source-map',
  //runtimeCompiler: true,
  devServer: {
    contentBase: './dist'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  mode: 'development',
  //mode: 'production',

  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'vue-style-loader',
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          //will help add prefixes to our css...
          'postcss-loader',
          // Compiles Sass to CSS
          'sass-loader'
        ]
      },
      {
        test: /\.(jpe?g|png)$/i,
        use: ['responsive-loader'],
        options: {
          adapter: require('responsive-loader/sharp'),
          sizes: [300, 600, 900]
        }
      },
      {
        test: /\.(svg|gif)$/,
        use: ['file-loader']
      },
      {
        test: /\.html$/i,
        loader: 'html-loader'
      }
    ]
  },
  plugins: [new VueLoaderPlugin(), require(autoprefixer)]
};
