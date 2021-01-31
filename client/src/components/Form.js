import {useState} from 'react'
import { Form } from "../styles/Index";

const  FormData = ({test}) => {
    const [message, setMessage] = useState("");
    const handleSubmit = (e) =>{
        e.preventDefault();
        if (message ) {
            test.emit("chat", message);
            setMessage("")
        }
    }
    
    return (
        <Form onSubmit={handleSubmit}>
        <input
            type='text'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder='🎃📦🧵💨'
        />
        <button>📦</button>
    </Form>
    )
}

export default FormData
