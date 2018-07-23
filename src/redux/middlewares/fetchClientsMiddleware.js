import { fetchClients } from 'Redux/actionCreators';

import filterClientsMiddleware from 'Redux/middlewares/filterClientsMiddleware';

import mockClients from '../../assets/mockups/clients';

const fetchClientsMiddleware = () => dispatch => {

    const clientsList = mockClients.map((item, index) => {
        item.id = `${index}`;

        return item;
    });

    dispatch(fetchClients(clientsList));
    dispatch(filterClientsMiddleware());
}

export default fetchClientsMiddleware;
