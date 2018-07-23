import {
    FILTER_CLIENTS,
    SELECT_CLIENT,
    FETCH_CLIENTS
} from '../actionTypes';

export const selectClient = id => ({
    type: SELECT_CLIENT,
    id
});

export const fetchClients = payload => ({
    type: FETCH_CLIENTS,
    payload
});

export const filterClients = payload => ({
    type: FILTER_CLIENTS,
    payload
});
