import { combineReducers } from "redux";
import filterReducer from './redux/filters/filterReducer';
import todoReducer from './redux/todos/todoReducer';

const rootReducer = combineReducers({
    todoReducer,
    filterReducer
})

export default rootReducer;