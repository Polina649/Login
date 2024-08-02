import axios from 'axios';

export const isAuthenticated = () => {
    const token = localStorage.getItem('token');
    return token != null;
};
export const login = async (username, password) => {
    const response = await axios.post('/api/login', { username, password });
    localStorage.setItem('token', response.data.token);
};

export const logout = () => {
    localStorage.removeItem('token');
};
