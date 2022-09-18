import initialState from "./initialState";
import { STATUSCHANGED, COLORCHANGED } from './actionTypes'

const filterReducer = (state = initialState, action) => {

    switch (action.type) {
        case STATUSCHANGED:

            return {
                ...state,
                status: action.payload
            }


        case COLORCHANGED:
            const { color, changedType } = action.payload;

            switch (changedType) {
                case 'added':
                    return {
                        ...state,
                        color: [...state.color, color],
                    }

                case 'removed':
                    return {
                        ...state,
                        color: state.color.filter((existingColor) => existingColor !== color),

                    };


                default:
                    return state;
            }

        default:
            return state;
    }

}


export default filterReducer;