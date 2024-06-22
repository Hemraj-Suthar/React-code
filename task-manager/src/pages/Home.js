import React, { useState, useEffect } from 'react';
import TaskList from '../components/TaskList';
import { getTasks } from '../api/tasks';

const Home = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        getTasks().then(setTasks);
    }, []);

    return (
        <div>
            <h1>Task Manager</h1>
            <TaskList tasks={tasks} />
        </div>
    );
};

export default Home;
