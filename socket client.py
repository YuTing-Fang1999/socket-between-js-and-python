import socketio

sio = socketio.Client()
sio.connect('http://localhost:5252')
while True:
    t = input()
    sio.emit('msg', {'text': t})
    if t == 'q': break

sio.disconnect()