let socket = io.connect("localhost:3000");
let form = document.querySelector("form");
let input = document.querySelector("#text");
let messages = document.querySelector("#messages");

const data ={
    name : new URLSearchParams(window.location.search).get("a"),
    room :  new URLSearchParams(window.location.search).get("b"),
}

socket.emit("joined",(data));
socket.emit("new user",(data));
socket.emit("disconect",(data));

form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (input.value) {
        socket.emit('chat', input.value);
        input.value = '';
    }
});

socket.on("user-connected",function(name){
    messages.append(name)
});

socket.on("user-disconnected",function(name){
    messages.append(name)
});

socket.on('chat', function(msg) {
    var item = document.createElement('p');
    item.textContent = msg;
    console.log(msg)
    messages.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
});
