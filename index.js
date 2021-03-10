let app = require('express')();
let port = process.env.PORT || 3000;
var http = require('http').Server(app);
const cors = require('cors');
const io = require("socket.io")(http, {
	cors: { origin: "http://localhost:3001"}
});

http.listen(port);
app.use(cors());
app.get("/", (req, res) => {
	res.send({ response: "Server is up and running." }).status(200);
});

let users = []

io.on('connection', (socket) => {
	socket.on("joined", function ({name,room}){
		const user = userJoin(socket.id, name, room);
		socket.join(user.room);
		socket.on("chat", (msg) =>io.to(user.room).emit('chat',{ user: user.name, msg: msg }));
	});

	socket.on("new user", ({ name, room }) =>{
		const user = userJoin(socket.id, name, room);
		socket.join(user.room);
		socket.broadcast.to(user.room).emit('user-connected', user.name  );
	});

	socket.on('disconnect', () =>{
		const user = userLeave(socket.id);
		if (user) {
			socket.broadcast.to(user.room).emit('user-disconnected',  user.name )
		};
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
