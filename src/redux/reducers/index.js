import { combineReducers } from 'redux';

import filteredClients from './filteredClients';
import selectedClient from './selectedClient';
import clients from './clients';

const rootReducer = combineReducers({
    filteredClients,
    selectedClient,
    clients
});

export default rootReducer;
