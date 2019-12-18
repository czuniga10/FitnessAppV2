let initialState = {
    iscomplete: false
}


function updateChecked( state = initialState, action ){
    switch( action.type ) {
        case "UPDATE_CHECKED":
            return Object.assign( action.payload );

        default: return state;
    }
}

export default updateChecked;