import axios from 'axios';

const baseURL = 'api/workouts';

const getAllWorkouts = async (projectId) => {
    try {
        const res = await axios
            .get(`${baseURL}/${projectId}`);
        return res;
    }
    catch (err) {
        throw err;
    }
}

const getWorkoutByID = async (id) => {
    try {
        const res = await axios
            .get(`${baseURL}/${id}`);
        return res;
    }
    catch (err) {
        throw err;
    }
}

const createWorkout = async () => {
    try {
        const res = await axios
            .post(`${baseURL}/create`);
        return res;
    }
    catch (err) {
        throw err;
    }
}



export {
    getAllWorkouts,
    getWorkoutByID,
    createWorkout
}