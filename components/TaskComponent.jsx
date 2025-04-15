import React, {Component, useState} from "react";
import TaskForm from "./TaskForm";

export default function TaskComponent() { 
const [taskList, setTaskList] = useState([
{
    id: 1,
    title: "Clean Kitchen",
    description:" Clean the Kitchen"
},
{
    id: 2,
    title: "Take out Trash",
    description:" Clean the Kitchen"
},
{
    id: 3,
    title: "Feed beholder",
    description:"Feed the mythical creature of D&D legend"
},
{
    id: 4,
    title: "Complete Front End II Midterm",
    description:"Add and delete task button"
}
])

const [search, setSearch] = useState("");

const result = taskList.filter((tasks) => 
    tasks.title.toLowerCase().includes(search.toLowerCase())
)

function List() {
    const listItems = result.map(task => 
    <li key={task.id}>
    {task.title}<br />
    {task.description}
    <button onClick={() => deleteTask(task.id)}>Delete</button>
    </li>);
    return <ul>{listItems}</ul>;
  }

  function sortTasks() {
    const sortedTasks = [...taskList].sort((a, b) => {
        if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
        if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
        return 0;
    });
    setTaskList(sortedTasks);
    }

    const addTask = (newTask) => {
        setTaskList([...taskList, newTask]);
    };

    const deleteTask = (id) => {
      const isConfirmed = window.confirm("Are you sure you want to delete this task?");
      if (isConfirmed) {
      setTaskList(taskList.filter((task) => task.id !== id));
    }
      };

return <div>
    <form onSubmit={(e) => e.preventDefault()}>
        <input
            id="search"
            type="text"
            role="searchbox"
            placeholder="Search Task"
            className="input"
            onChange={(e) => setSearch(e.target.value)}
        />
        <button type="button" onClick={sortTasks}>Sort Alphabetically</button>
    </form>
    <TaskForm addTask={addTask} />
    {List()}
</div>;
}