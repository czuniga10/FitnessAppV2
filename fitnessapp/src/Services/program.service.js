import axios from 'axios';

const baseURL = 'api/program';

const getUserPrograms = async (id) => {
    try {
        const res = await axios
            .get(`${baseURL}/${id}`);
        return res;
    }
    catch (err) {
        throw err;
    }
}

const getUserWorkouts = async (id) => {
    try {
        const res = await axios
            .get(`${baseURL}/program-workouts/${id}`);
        return res;
    }
    catch (err) {
        throw err;
    }
}

const createProgram = async () => {
    try {
        const res = await axios
            .get(`${baseURL}/create`);
        return res;
    }
    catch (err) {
        throw err;
    }
}

const updateChecked = async () => {
    try {
        const res = await axios
            .post(`${baseURL}/`);
        return res;
    }
    catch (err) {
        throw err;
    }
}

export {
    getUserPrograms,
    getUserWorkouts,
    createProgram
}