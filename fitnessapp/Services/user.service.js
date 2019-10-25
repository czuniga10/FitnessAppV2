import axios from 'axios';

const baseURL = 'api/user';

const getUserByID = (id) => {
    return axios
        .get(`${baseURL}/${id}`)
        .then(res => res)
        .catch(err => {throw err});
}

const updateUserInfo = (id,body) => {
    return axios
        .put(`${baseURL}/update/${id}`, body)
        .then(res => res)
        .catch(err => {throw err});
}

export {
    getUserByID,
    updateUserInfo
}