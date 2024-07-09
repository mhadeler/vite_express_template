import { default as ax } from 'axios';

const useApi = () => {
    const axios = ax.create({
        baseURL: '/api/',
    })

    return {
        getExample1: () => {
            return axios.get('/example1', {
                params: {
                    message: "hello",
                }
            })
        },
        getExample2: () => {
            return axios.get('/example2');
        },
        postExample2: (your_message) => {
            return axios.post('/example2', {
                message: your_message,
            })
        }
    }
}

export default useApi;