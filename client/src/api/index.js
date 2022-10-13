import axios from 'axios';

const url = 'http://localhost5000/post';

export const fetchPost = () => axios.get(url);