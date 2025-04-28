exports.socketHandler = (io, socket) => {
    console.log('New client connected');
  
    socket.on('sendMessage', (message) => {
      io.emit('receiveMessage', message);
    });
  
    socket.on('disconnect', () => {
      console.log('Client disconnected');
    });
  };