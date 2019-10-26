import axios from 'axios';

const baseURL = 'api/user';

const getUserByID = async (id) => {
    try {
        const res = await axios
            .get(`${baseURL}/${id}`);
        return res;
    }
    catch (err) {
        throw err;
    }
}

const updateUserInfo = async (id,body) => {
    try {
        const res = await axios
            .put(`${baseURL}/update/${id}`, body);
        return res;
    }
    catch (err) {
        throw err;
    }
}

export {
    getUserByID,
    updateUserInfo
}