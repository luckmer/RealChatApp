import { useRef, useEffect } from "react";
import { User, OtherUser } from "../styles/Index";

const Messages = ({ data, name }) => {
    const CurrentUser = useRef(null);
    const Quest = useRef(null);

    useEffect(() => scrollToBottom(), [data]);

    const scrollToBottom = () => {
        CurrentUser.current?.scrollIntoView({ behavior: "smooth" });
        Quest.current?.scrollIntoView({ behavior: "smooth" });
    };

    return data.map(({ user, msg }, i) => {
        let current = false;
        let one = user.trim().toLowerCase();
        let two = name.trim().toLowerCase();
        if (one === two) current = true;
        return current === true ? (
            <User key={i} ref={CurrentUser}>
                <p>{user}</p>
                <div>
                    <p>{msg}</p>
                </div>
            </User>
        ) : (
            <OtherUser key={i} ref={Quest}>
                <div>
                    <p>{msg}</p>
                </div>
                <p>{user}</p>
            </OtherUser>
        );
    });
};

export default Messages;
