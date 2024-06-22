import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/todos';

export const getTasks = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const getTaskById = async (id) => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
};

export const createTask = async (task) => {
    const response = await axios.post(API_URL, task);
    return response.data;
};
