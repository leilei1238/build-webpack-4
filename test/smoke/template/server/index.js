if (typeof window === 'undefined') {
  global.window = {}
}

const path = require('path')
const express = require('express')
const { renderToString } = require('react-dom/server')
const fs = require('fs')
const SSR = require('../dist/search-server')
const axios = require('axios')

const template = fs.readFileSync(
  path.join(__dirname, '../dist/search.html'),
  'utf-8'
)
const renderMarkup = async (str) => {
  let { data } = await axios.get('http://localhost:4000/data')
  data = JSON.stringify(data)
  return template
    .replace('<!-- HTML_PLACEHOLDER -->', str)
    .replace(
      '<!-- INITIAL_DATA_PLACEHOLDER -->',
      `<script>window._initial_data=${data}</script>`
    )
}

const server = (port) => {
  const app = express()

  app.use(express.static('dist'))
  app.get('/search', async (req, res) => {
    const html = await renderMarkup(renderToString(SSR))
    res.status(200).send(html)
  })

  app.listen(port, () => {
    console.log(`Server is running on port:${port}`)
  })
}
server(process.env.PORT || 3000)
