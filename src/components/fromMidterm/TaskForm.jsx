import React, { useState } from "react";

export default function TaskForm({ addTask }){
    const [task, setTask] = useState({
        title: "",
        description: ""
    });

    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the page from reloading
        if (task.title && task.description) {
          const newTask = {
            id: Date.now(), // Unique ID for each task (using timestamp here)
            title: task.title,
            description: task.description,
          };
          addTask(newTask); // Add the task to the list
          setTask({ title: "", description: "" }); // Reset the form fields
        } else {
          alert("Please fill out both the title and description.");
        }
    };
return (
    <form onSubmit={handleSubmit}>
        <p>Output a task to console:</p>
            {/* Bind input field to state */}
            <input
                type="text"
                placeholder="Task Title"
                value={task.title}
                onChange={(e) => setTask({ ...task, title: e.target.value })} 
            />
            {/* Description input field */}
            <input
                type="text"
                placeholder="Task Description"
                value={task.description}
                onChange={(e) => setTask({ ...task, description: e.target.value })}
            />
        {/* Submit button */}
        <input type="submit" value="Add Task" />
    </form>
)
}