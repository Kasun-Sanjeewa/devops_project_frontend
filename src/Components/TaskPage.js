import React, { useEffect, useState } from 'react';
import './TaskPage.css';
import axios from 'axios';

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



    //Get Task

    useEffect(() => {
        getTask();
    }, []);

    const getTask = () => {
        axios.get('http://localhost:3001/api/getTask')
            .then(Response => {
                setTasks(Response.data.response);
            })
            .catch(err => {
                console.error("Axios Error : ", err);
            })
    }

    // Add task

    const addTask = () => {
        if (taskInput.trim()) {
            const payload = { task: taskInput };

            axios.post('http://localhost:3001/api/addTask', payload)
                .then(() => {
                    window.alert("Task Added");
                    getTask(); // Refresh the task list from the server
                })
                .catch(err => {
                    console.error("Axios Error : ", err);
                });

            setTaskInput(""); // Clear the input field
        }
    };



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
                        <li key={task._id || index} className='task-item'>
                            {task.task} {/* Access the `task` property of the object */}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
