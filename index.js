
const port = process.env.PORT || 3000;
const express = require("express");
const socket = require("socket.io");
const  path = require('path');
const http = require("http");
const app = express();
const server = http.createServer(app);
const io = socket(server);

app.use(express.static(path.join(__dirname, './public/components')));
app.use(express.static(path.join(__dirname, './public/views')));
app.use(express.static(path.join(__dirname, './public')));
server.listen(port,console.log("connected"))

app.get('/', (req, res) =>{
    res.sendFile(__dirname + '/public/views/index.html')
});

app.get('/:room', (req, res) =>{
    res.sendFile(__dirname + '/public/views/room.html')
});

let users = []

io.on('connection', (socket) => {
	socket.on("create new data", function (a, b){
		let destination = `http://localhost:3000/room?a=${a}&b=${b}`;
		socket.emit("redirect", destination)
	});

	socket.on("joined", function ({name,room}){
		const user = userJoin(socket.id, name, room);
		socket.join(user.room);
		socket.on("chat", (msg) => io.to(user.room).emit('chat', user.name + " " + msg));
	});

	socket.on("new user", ({ name, room }) =>{
		const user = userJoin(socket.id, name, room);
		socket.join(user.room);
		socket.broadcast
			.to(user.room)
			.emit('user-connected', user.name + " has joined");
	});

	socket.on('disconnect', function (){
		const user = userLeave(socket.id);
		if (user) socket.broadcast
			.to(user.room)
			.emit('user-disconnected', user.name + " has disconnected ");
    });

});

const userJoin = (id, name, room) => {
	const user = { id, name, room };
	users.push(user);
	return user;
}

const userLeave = (id) =>  {
	const index = users.findIndex(user => user.id === id);
	if (index !== -1) return users.splice(index, 1)[0];
}