import { useEffect, useState } from "react";
import io from "socket.io-client";
import {
    Article,
    Header,
    MessagesView,
    SubmitFormSection,
} from "../styles/Index";
import { FormData, Messages } from "../export";

let socket;
const Chat = () => {
    const [name, setName] = useState("");
    const [room, setRoom] = useState("");
    const [,setUserConnected] = useState("");
    const [,setUserDisconnected] = useState("");
    const [data, setData] = useState([]);

    useEffect(() => {
        socket = io.connect("localhost:3000");
        const data = {
            name: new URLSearchParams(window.location.search).get("name"),
            room: new URLSearchParams(window.location.search).get("room"),
        };
        setName(data.name);
        setRoom(data.room);

        socket.emit("joined", data);
        socket.emit("new user", data);

        socket.on("user-connected", (name) => setUserConnected(name));
        socket.on("user-disconnected", (name) => setUserDisconnected(name));
        return () => socket.disconnect();
    }, []);

    useEffect(() => socket.on("chat", (msg) => setData([...data, msg])), [
        data,
    ]);

    return (
        <Article>
            <section>
                <Header>
                    <span>Room : {room} </span>
                    <p>🎃📦🧵💨</p>
                </Header>
            </section>
            <MessagesView>
                <Messages data={data} name={name} />
            </MessagesView>
            <SubmitFormSection>
                <FormData test={socket} />
            </SubmitFormSection>
        </Article>
    );
};

export default Chat;
