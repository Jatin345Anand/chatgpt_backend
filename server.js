const mongoose = require('mongoose');
const http = require('http');
const { Server } = require('socket.io');
const app = require('./app');
const { socketHandler } = require('./sockets/socket');

const server = http.createServer(app);
const io = new Server(server, { cors: { origin: '*' } });

console.log('Starting server...', process.env.NODE_ENV, process.env.MONGO_URI);
// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error(err));

// Socket.io connection
io.on('connection', socket => socketHandler(io, socket));

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));