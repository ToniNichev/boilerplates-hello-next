const express = require('express')
const next = require('next')
    
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
    
app.prepare()
.then(() => {
  const server = express()

  server.get('/PageOne', (req, res, next) => {
    app.render(req, res, '/PageOne', {});    
  })  

  server.get('/PageTwo', (req, res, next) => {
    app.render(req, res, '/PageTwo', {});    
  })
    
  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})