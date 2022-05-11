import axiosInstance from './axios.js'

const get = () => {
    return axiosInstance.get('roadtrip')
};

export {get, }