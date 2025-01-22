import React, { useState } from 'react';
import './TaskPage.css';

export default function TaskPage() {
    // const [tasks, setTasks] = useState([]);
    // const [taskInput, setTaskInput] = useState("");

    // const addTask = () => {
    //     if (taskInput.trim()) {
    //         setTasks([...tasks, taskInput]);
    //         setTaskInput("");
    //     }
    // };

    // const handleInputChange = (e) => {
    //     setTaskInput(e.target.value);
    // };

    const [taskInput, setTaskInput] = useState("")
    const [tasks, setTasks] = useState([])

    const handleInputChange = (e) => {
        setTaskInput(e.target.value)
    }

    const addTask = () => {
        if (taskInput.trim()) {
            setTasks([...tasks, taskInput]);
            setTaskInput("")
        }
    }

    return (
        <div className='heropage'>
            <div className='task-container'>
                <h1 className='title'>Task Manager</h1>
                <div className='input-area'>
                    <input
                        type='text'
                        placeholder='Add a new task...'
                        value={taskInput}
                        onChange={handleInputChange}
                        className='task-input'
                    />
                    <button onClick={addTask} className='add-button'>Add</button>
                </div>
            </div>
            <div className='task-list-container'>
                <ul className='task-list'>
                    {tasks.map((task, index) => (
                        <li key={index} className='task-item'>{task}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
