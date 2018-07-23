
import { FILTER_CLIENTS } from '../actionTypes';

const filteredClients = (state = [], action) => {
    switch (action.type) {
        case FILTER_CLIENTS:

            return [...action.payload];
        default:

            return state;
    }
};

export default filteredClients;
