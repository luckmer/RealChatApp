import { Join, Chat,Error } from "../export";

export const routes = [
    { path: "/", Component: Join, name: "join" },
    { path: "/chat", Component: Chat, name: "chat" },
    { path: "*", Component: Error, name: "404" },
]