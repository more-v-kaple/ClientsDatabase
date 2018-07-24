import { createSelector } from 'reselect';

import getClientInfo from 'Redux/selectors/getClientInfo';

const getClientInfoSelector = createSelector(
    state => state.clients,
    state => state.selectedClient.id,
    (clients, id) => getClientInfo(clients, id)
);

export default getClientInfoSelector;
