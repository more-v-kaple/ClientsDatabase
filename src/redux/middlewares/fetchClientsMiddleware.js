import { fetchClients } from 'Redux/actionCreators';
import mockClients from '../../assests/mockups/clients';
const fetchClientsMiddleware = () => dispatch => {

    const clientsList = mockClients.map((item, index) => {
        item.id = `${index}`;

        return item;
    });

    dispatch(fetchClients(clientsList));
}

export default fetchClientsMiddleware;
