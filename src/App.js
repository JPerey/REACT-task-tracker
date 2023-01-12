import { useState } from "react"

import Header from "./components/Header"
import Tasks from "./components/Tasks"
import AddTask  from "./components/AddTask"

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
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

// Add Task
const addTask = (task) => {
  const id = Math.floor(Math.random()* 10000) + 1
  const newTask = {id, ...task}
  setTasks([...tasks,newTask])
}

// Delete Tasks
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

// Toggle Reminder

const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
}

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)}/>
      {showAddTask && <AddTask onAdd={addTask}/> }
      { tasks.length > 0 ? <Tasks tasks = {tasks} setTasks = {setTasks} onDelete = {deleteTask} onToggle={toggleReminder}/> : "No Tasks to Show"}
    </div>
  );
}

export default App;
