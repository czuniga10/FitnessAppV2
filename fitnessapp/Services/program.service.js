import axios from 'axios';

const baseURL = 'api/program';

const getUserPrograms = (id) => {
    return axios
        .get(`${baseURL}/${id}`)
        .then(res => res)
        .catch(err => {throw err});
}

export {
    getUserPrograms
}