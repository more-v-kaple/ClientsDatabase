import { createSelector } from 'reselect';

import getClientInfo from 'Redux/selectors/getClientInfo';

export const getClientInfoSelector = createSelector(
    state => state.clients,
    state => state.selectedClient.id,
    (clients, id) => getClientInfo(clients, id)
);

export const getIsSelectedClient = createSelector(
    state => state.selectedClient.id,
    id => id ? true : false
);

export const getFilteredClients = createSelector(
    state => state.filteredClients,
    state => state.selectedClient.id,
    (filteredClients, id) => ({
        filteredClients,
        id
    })
);
