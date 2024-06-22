import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import TaskDetail from './pages/TaskDetail';
import TaskForm from './pages/TaskForm';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/tasks/:id" element={<TaskDetail />} />
                    <Route path="/new-task" element={<TaskForm />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;


