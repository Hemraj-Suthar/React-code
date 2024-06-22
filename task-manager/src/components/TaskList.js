import React from 'react';
import { Link } from 'react-router-dom';
import Task from './Task';

const TaskList = ({ tasks }) => {
    return (
        <div>
            {tasks.map(task => (
                <Link key={task.id} to={`/tasks/${task.id}`}>
                    <Task task={task} />
                </Link>
            ))}
        </div>
    );
};

export default TaskList;

