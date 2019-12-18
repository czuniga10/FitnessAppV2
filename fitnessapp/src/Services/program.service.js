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

const updateChecked = async (body) => {
    try {
        const res = await axios
            .patch(`${baseURL}/update-check`, body);
        return res;
    }
    catch (err) {
        throw err;
    }
}

export {
    getUserPrograms,
    getUserWorkouts,
    createProgram,
    updateChecked
}