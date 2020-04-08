const assert = require('assert')

const projectRoot = process.cwd()

describe('webpack.base.js test case', () => {
  const baseConfig = require('../../lib/webpack.base')
  console.log(baseConfig)
  it('entry', () => {
    assert.equal(baseConfig.entry.index, `${projectRoot}/src/index/index.js`)
    assert.equal(baseConfig.entry.search, `${projectRoot}/src/search/index.js`)
  })
})
