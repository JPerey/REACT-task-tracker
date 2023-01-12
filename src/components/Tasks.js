import Task from "./Task"

const Tasks = ({tasks, setTasks, onDelete}) => {
    return ( 
    <div >
        {tasks.map((task) => (
        <Task key={task.id} task={task} setTask={setTasks} onDelete = {onDelete}/>
        ))}
    </div>
    )
}

export default Tasks