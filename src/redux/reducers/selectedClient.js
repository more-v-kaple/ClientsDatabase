import {
    SELECT_CLIENT
} from '../actionTypes';

const selectedClient = (state = {}, action) => {
    switch (action.type) {
        case SELECT_CLIENT:

            return { ...state, id: action.id };
        default:

            return state;
    }
};

export default selectedClient;
