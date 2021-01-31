import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Article } from "../styles/Article";

function Join() {
    const [state, setState] = useState({
        name: "",
        room: "",
    });
    const { name, room } = state;
    const handleChange = (e) =>
        setState({ ...state, [e.target.name]: e.target.value });

    return (
        <Article>
            <input
                name='name'
                onChange={handleChange}
                placeholder='name'
                required
            />
            <input
                name='room'
                onChange={handleChange}
                placeholder='room'
                required
            />
            <Link
                onClick={(e) => (!name || !room ? e.preventDefault() : null)}
                to={`/chat?name=${name}&room=${room}`}>
                <button type='submit'>Sign In</button>
            </Link>
        </Article>
    );
}

export default Join;
