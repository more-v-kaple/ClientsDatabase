import axios from 'axios';

import { fetchClients } from 'Redux/actionCreators';

import filterClientsMiddleware from 'Redux/middlewares/filterClientsMiddleware';

const fetchClientsMiddleware = () => dispatch => {
    axios('../../clients.json')
        .then((response) => {
            const clientsList = response.data.map((item, index) => {
                item.id = `${index}`;

                return item;
            });

            dispatch(fetchClients(clientsList));
            dispatch(filterClientsMiddleware());
        })
        .catch((error) => {
            const errorMessage = error.response.data || error.response.data.msg;
            console.error(errorMessage);
        });
}

export default fetchClientsMiddleware;
