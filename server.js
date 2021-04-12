const { existsSync, readFile, lstatSync } = require('fs')
const { join, extname } = require('path')
const { createServer } = require('http')

const folder = join(__dirname, 'build')
const port = 3000

if (existsSync(folder) && lstatSync(folder).isDirectory()) {
  createServer((req, res) => {
    console.log('req', req.url)
    const file = req.url === '/' ? 'index.html' : req.url
    const extension = String(extname(file)).toLowerCase()
    const mimeTypes = {
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

    const contentType = mimeTypes[extension] || 'application/octet-stream'
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
