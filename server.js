const { createServer } = require('http')
const handler = require('serve-handler')

const server = createServer((request, response) => {
  return handler(request, response, { public: 'build' })
})

server.listen(3000, () => {
  console.log('Running at http://localhost:3000')
})
