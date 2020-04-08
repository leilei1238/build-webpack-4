/**
 * @description 测试脚本
 */

const path = require('path')
const webpack = require('webpack')
const rimraf = require('rimraf')
const Mocha = require('mocha')

const mocha = new Mocha({
  timeout: '10000ms',
})
process.chdir(path.join(__dirname, 'template'))

const prodConfig = require('../../lib/webpack.prod')

rimraf('./dist', () => {
  webpack(prodConfig, (err, stats) => {
    if (err) {
      console.log(err, err.message, err.stack)
      process.exit(2)
    }

    console.log(
      stats.toString({
        colors: true,
        modules: false,
        children: false,
      })
    )
    console.log('webpack构建成功，开始执行测试用例')
    mocha.addFile(path.join(__dirname, 'html.test.js'))
    mocha.addFile(path.join(__dirname, 'css-js.test.js'))
    mocha.run()
  })
})
