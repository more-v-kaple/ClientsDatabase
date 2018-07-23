
import { filterClients } from 'Redux/actionCreators';

import deepSearchInValues from 'Utils/deepSearchInValues';

const filterClientsMiddleware = keyword => (dispatch, getState) => {
    new Promise(resolve => {
        const fullList = getState().clients;

        resolve(fullList);
    })
        .then(fullList => {
            const filteredList = keyword ?
                    fullList.filter(
                        client => deepSearchInValues(client, keyword)
                    )
                    : fullList,
                cutList = filteredList.map(client => {
                    return {
                        avatar: client.general.avatar,
                        name: `${client.general.firstName} ${client.general.lastName}`,
                        job: client.job.title,
                        id: client.id
                    }
                });

            dispatch(filterClients(cutList));
        })
        .catch((error) => {
            const errorMessage = error.response.data || error.response.data.msg;
            console.error(errorMessage);
        });
}

export default filterClientsMiddleware;
