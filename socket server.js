const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http, {
  origins: '*:*', path: '/',
  serveClient: false
});

app.get('/', (req, res) => {
  res.send('OK');
})

io.sockets.on('connection', (socket) => {
  console.log(`socket [${socket.id}] connected`);

  socket.on('msg', (data) => {
    console.log(`socket [${socket.id}] msg`, data)
  })

  socket.on('disconnect', () => {
    console.log(`socket [${socket.id}] disconnected`)
  })
});

http.listen(5252, () => {
  console.log('listening on 5252');
})