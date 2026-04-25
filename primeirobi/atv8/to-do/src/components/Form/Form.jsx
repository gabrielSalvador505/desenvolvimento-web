import { useState } from "react"
import "./form.css"

export default function Form({ onSubmit }) {

    const [texto, setTexto] = useState("")

    function handleSubmit() {
        event.preventDefault();
        if(!texto.trim()) return;
        onSubmit(texto)
        setTexto("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={texto} onChange={(e) => setTexto(e.target.value)}/>
            <button className="add-button" type="subimit">+</button>
        </form>
    )
}