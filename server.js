const express = require('express');
const next = require('next');
const { parse } = require('url');
    
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler();
    
app.prepare()
.then(() => {
  const server = express(); 

  server.use(function(req, res, next) {
    var temp = res.end;
    res.end = function(data) {
        if(typeof data != 'undefined')
            data = data.replace(/http\:\/\/test.com\/one/g, "http://1-test.com/one");
        temp.apply(this,arguments);
    }
    next();
})

  
  server.get('*', (req, res) => {
    const parsedUrl = parse(req.url, true)
    const { pathname, query } = parsedUrl

    console.log(">>>", pathname);
    if (pathname === '/PageOne') {      
      app.render(req, res, '/PageOne', query)
    } else if (pathname === '/PageTwo') {
      app.render(req, res, '/PageTwo', query)
    } 
    else return handle(req, res);
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