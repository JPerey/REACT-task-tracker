import { useState } from "react"

import Header from "./components/Header"
import Tasks from "./components/Tasks"

function App() {
  let [tasks, setTasks] = useState([{
    id: 1,
    text: "head to gym",
    day: "every day at 6:30 AM",
    reminder: true,
},
{
    id: 2,
    text: "head to school",
    day: "every day at 8:30 AM",
    reminder: true,
}
])

// Delete Tasks
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

  return (
    <div className="container">
      <Header />
      { tasks.length > 0 ? <Tasks tasks = {tasks} setTasks = {setTasks} onDelete = {deleteTask}/> : "No Tasks to Show"}
    </div>
  );
}

export default App;
