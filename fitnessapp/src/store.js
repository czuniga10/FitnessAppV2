import {createStore,combineReducers} from 'redux';
import userInfo from './Reducers/user.reducer';
import updateChecked from './Reducers/checked.reducer';



let rootReducer = combineReducers({
    userInfo,
    updateChecked
})

export default createStore( rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() );