import axios from 'axios';

const intance = axios.create({
    baseURL: 'https://react-burger-bulder-623b3.firebaseio.com/',
});

export default intance;