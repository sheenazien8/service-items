const init = (server) => {
  server.get('*', (req, res, next) => {
    console.log('Request was made to: ' + req.originalUrl);
    return next();
  })

  server.get('/server', (req, res) => {
    res.json({
      server: 'ok'
    })
  })

}

module.exports = {init}
