export const GET_PROGRAM = "GET_PROGRAM";
export const GET_WORKOUT = "GET_WORKOUT";
export const ADD_PROGRAM = "GET_PROGRAM";
export const ADD_WORKOUT = "GET_WORKOUT";
export const UPDATE_USER = "UPDATE_USER";

export const getProgram = (user) => {
    return{
        type: GET_PROGRAM,
        payload: user
    }
}

export const getWorkout = (workout) => {
    return{
        type: GET_WORKOUT,
        payload: workout
    }
}

export const addWorkout = (workout) => {
    return{
        type: ADD_WORKOUT,
        payload: workout
    }
}

export const addProgram = (program) => {
    return{
        type: ADD_PROGRAM,
        payload: program
    }
}

export const updateUser = (user) => {
    return{
        type: UPDATE_USER,
        payload: user
    }
}
