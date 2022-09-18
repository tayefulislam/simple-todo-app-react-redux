import { STATUSCHANGED, COLORCHANGED } from './actionTypes';

export const colorChanged = (color, changedType) => {
    return {
        type: COLORCHANGED,
        payload: {
            color, changedType
        }
    }
}


export const statuschanged = (status) => {
    return {
        type: STATUSCHANGED,
        payload: status,
    }
}