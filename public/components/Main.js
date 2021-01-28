let socket = io.connect('http://localhost:3000');
let nick = document.querySelector(".a");
let room = document.querySelector(".b");
let form = document.querySelector("form");

form.addEventListener("submit",function(e){
    e.preventDefault();
    let nameValue = nick.value;
    let roomValue = room.value;
    socket.emit("create new data",nameValue,roomValue);
});

socket.on('redirect', function(destination) {
    window.location.href = destination;
});