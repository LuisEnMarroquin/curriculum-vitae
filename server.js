const { existsSync, readFile, lstatSync } = require('fs')
const { join, extname } = require('path')
const { createServer } = require('http')

const folder = join(__dirname, 'build')
const port = 3000

if (existsSync(folder) && lstatSync(folder).isDirectory()) {
  createServer((req, res) => {

    var file = req.url === '/' ? 'index.html' : req.url

    console.log('req', req.url)

    var ext = String(extname(file)).toLowerCase()
    var mimeTypes = {
      '.html': 'text/html',
      '.js': 'text/javascript',
      '.css': 'text/css',
      '.json': 'application/json',
      '.png': 'image/png',
      '.jpg': 'image/jpg',
      '.gif': 'image/gif',
      '.svg': 'image/svg+xml',
      '.wav': 'audio/wav',
      '.mp4': 'video/mp4',
      '.woff': 'application/font-woff',
      '.ttf': 'application/font-ttf',
      '.eot': 'application/vnd.ms-fontobject',
      '.otf': 'application/font-otf',
      '.wasm': 'application/wasm'
    }

    var contentType = mimeTypes[ext] || 'application/octet-stream'

    readFile(`build/${file}`, (error, content) => {
      if (error) {
        console.error({ error })
      } else {
        res.writeHead(200, { 'Content-Type': contentType })
        res.end(content, 'utf-8')
      }
    })

  }).listen(port)
  console.log(`Visit http://localhost:${port}`)
} else {
  console.log(`Folder ${folder} doesn't exists`)
}

// https://developer.mozilla.org/en-US/docs/Learn/Server-side/Node_server_without_framework
