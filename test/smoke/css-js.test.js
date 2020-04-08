const glob = require('glob')

describe('Checking generated css files', () => {
  it('should generate html files', (done) => {
    const files = glob.sync('./dist/@(index|search)_*.@(js|css)')
    if (files.length > 0) {
      done()
    } else {
      throw new Error('no css-js files generated')
    }
  })
})
