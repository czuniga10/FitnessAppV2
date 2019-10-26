import {createStore,combineReducers} from 'redux';
import userInfo from './Reducers/user.reducer';

let rootReducer = combineReducers({
    userInfo
})

export default createStore( rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() );