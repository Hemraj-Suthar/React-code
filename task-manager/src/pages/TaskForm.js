import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createTask } from '../api/tasks';

const TaskForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        createTask({ title, description }).then(() => {
            navigate('/');
        });
    };

    return (
        <div>
            <h1>Create New Task</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title</label>
                    <input value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div>
                    <label>Description</label>
                    <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>
                <button type="submit">Create Task</button>
            </form>
        </div>
    );
};

export default TaskForm;


