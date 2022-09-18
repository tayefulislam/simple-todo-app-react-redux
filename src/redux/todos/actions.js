import { ADDED, AllCOMPLETED, DELETED, TOGGLED, CLEARCOMPLETED, COLORSELECTED } from "./actionTypes";


export const added = (todoText) => {
    return {
        type: ADDED,
        payload: todoText,

    }
}
export const deleted = (todoId) => {
    return {
        type: DELETED,
        payload: todoId,

    }
}
export const allCompleted = () => {
    return {
        type: AllCOMPLETED,
    }
}
export const clearCompleted = () => {
    return {
        type: CLEARCOMPLETED,
    }
}
export const toggled = (todoId) => {
    return {
        type: TOGGLED,
        payload: todoId
    }
}
export const colorselected = (todoId, color) => {
    return {
        type: COLORSELECTED,
        payload: {
            todoId, color
        }
    }
}

