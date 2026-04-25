import IconDelete from "../IconDelete/IconDelete.jsx"
import "./tasks.css"
export default function Tasks({ listOfTasks, onDelete }) {
    return (
        <ul>
            {listOfTasks.map((task) => (
                <li key={task.id}>{task.text} <button className="delete-button" onClick={() => onDelete(task.id)}><IconDelete className="trash-icon"/></button></li>
            )
            )}
        </ul>
    )
}