// import { io } from "socket.io-client";
const io = require('socket.io-client');

function onSocketDisconnected() {
    console.log('[lappmodel] [onSocketDisconnected] disconnected!');
  }

function initSocketIO() {
    console.log('[lappmodel] [initSocketIO] Try to connect!');
    const socket = io('http://localhost:5252/', { transports : ['websocket'] });

    socket.on('connect', () => {
      console.log('[lappmodel] [initSocketIO] connected!');
    });

    //  test sever to client
    socket.on('date', function(data) {
      console.log(data.date);
    });

    socket.on('jsClient', data => {
      console.log(data);
    });

    socket.on('disconnect', onSocketDisconnected);
}

initSocketIO();