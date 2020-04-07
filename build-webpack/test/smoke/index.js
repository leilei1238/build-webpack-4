/**
 * @description 测试脚本
 */

const path = require('path')
const webpack = require('webpack')
const rimraf = require('rimraf')

process.chdir(path.join(__dirname, 'template'))

const prodConfig = require('../../lib/webpack.prod')

rimraf('./dist', () => {
  webpack(prodConfig, (err, stats) => {
    if (err) {
      console.log(err)
      process.exit(2)
    }

    console.log(
      stats.toString({
        colors: true,
        modules: false,
        children: false,
      })
    )
  })
})
