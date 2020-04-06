const path = require('path')
const glob = require('glob')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const setMPA = () => {
  const entry = {}
  const htmlWebpackPlugin = []

  const entryFiles = glob.sync(path.join(__dirname, 'src/*/index.js'))
  Object.keys(entryFiles).map((index) => {
    const entryFile = entryFiles[index]
    // "/Users/zhanglei/project/webpack-pro/src/index/index.js"
    const match = entryFile.match(/src\/(.+)\/index\.js/)
    const pageName = match && match[1]
    entry[pageName] = entryFile

    htmlWebpackPlugin.push(
      new HtmlWebpackPlugin({
        template: path.join(__dirname, `src/${pageName}/index.html`),
        filename: `${pageName}.html`,
        chunks: [pageName],
        inject: true,
        minify: {
          html5: true,
          collapseWhitespace: true,
          preserveLineBreaks: false,
          minifyCSS: true,
          minifyJS: true,
          removeComments: false,
        },
      })
    )
  })

  return {
    entry,
    htmlWebpackPlugin,
  }
}

const { entry, htmlWebpackPlugin } = setMPA()

module.exports = {
  entry,
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist'),
  },
  mode: 'development',
  devServer: {
    contentBase: './dist',
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.css?$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.less?$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10240,
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10240,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(),
  ].concat(htmlWebpackPlugin),
  devtool: 'cheap-source-map',
}
