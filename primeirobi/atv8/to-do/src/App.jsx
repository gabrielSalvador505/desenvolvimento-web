import { useState } from "react"
import Form from "./components/Form/Form.jsx"
import Tasks from "./components/Tasks/Tasks.jsx";
import Logo from "./components/Logo/Logo.jsx";

export default function App() {

  const [taskList, setTaskList] = useState([]);

  function addTask(taskText) {
    const newTask = {
      id: Date.now(),
      text: taskText
    };

    setTaskList([...taskList, newTask])
  };

  function deleteTask(id) {
    const filteredList = taskList.filter(task => task.id != id)
    setTaskList(filteredList)
  }
  return (
    <>
      <Logo/>
      <Form onSubmit={addTask}/>
      <Tasks listOfTasks={taskList} onDelete={deleteTask}/>
    </>
  )
}