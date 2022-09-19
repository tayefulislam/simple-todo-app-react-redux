import initialState from "./initialState";
import { ADDED, AllCOMPLETED, DELETED, TOGGLED, CLEARCOMPLETED, COLORSELECTED } from './actionTypes';
// import { renderIntoDocument } from "react-dom/test-utils";


const nextTodoId = (todo) => {
    const maxId = todo.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
    return maxId + 1;

}
// let completed;

const todoReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADDED:

            return [
                ...state, {
                    id: nextTodoId(state)
                }
            ]

        case TOGGLED:
            return state.map(todo => {
                if (todo.id !== action.payload) {
                    return todo;
                }
                return {
                    ...todo,
                    completed: todo.completed
                }
            });

        case COLORSELECTED:
            const { todoId, color } = action.payload;
            return state.map(todo => {
                if (todo.id !== todoId) {
                    return todo;
                }

                return {
                    ...todo,
                    color: color,
                }
            });

        case DELETED:
            return state.filter(todo => todo.id !== action.payload);

        case AllCOMPLETED:
            return state.map(todo => {
                return {
                    ...todo,
                    completed: true
                }
            })

        case CLEARCOMPLETED:
            return state.filter(todo => !todo.completed);



        default:
            return state;
    }

}

export default todoReducer;