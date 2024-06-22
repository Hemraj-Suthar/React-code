import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getTaskById } from '../api/tasks';

const TaskDetail = () => {
    const { id } = useParams();
    const [task, setTask] = useState(null);

    useEffect(() => {
        getTaskById(id).then(setTask);
    }, [id]);

    if (!task) return <div>Loading...</div>;

    return (
        <div>
            <h1>{task.title}</h1>
            <p>{task.description}</p>
        </div>
    );
};

export default TaskDetail;

