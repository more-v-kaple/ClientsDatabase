import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { selectClient as onSelectClient } from 'Redux/actionCreators';

import fetchClientsMiddleware from 'Redux/middlewares/fetchClientsMiddleware';

import './clientsList.scss';

import ClientCard from './components/ClientCard';

class ClientsList extends Component {
    componentDidMount () {
        const { fetchClients } = this.props;

        fetchClients();
    }

    handleClick = e => {
        const client = e.target.closest('div.client-card'),
            { selectClient } = this.props,
            id = client? client.dataset.id : null;

        id && selectClient(id);
    }

    render () {
        const { list, id } = this.props;

        return (
            <ul
                className="list-of-clients"
                onClick = { this.handleClick }
            >
                { list.length ?
                    list.map(client => (
                        <li
                            key = { client.id }
                        >
                            <ClientCard
                                info = { client }
                                selectedId = { id }
                            />
                        </li>
                    ))
                    : <li className="no-results"> No results found...</li>
                }
            </ul>
        );
    }
}

ClientsList.defaultProps = {
    list: [],
    id: ''
};

ClientsList.propTypes = {
    selectClient: PropTypes.func.isRequired,
    fetchClients: PropTypes.func.isRequired,
    list: PropTypes.arrayOf(PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        job: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired
    })),
    id: PropTypes.string
};

const mapStateToProps = state => ({
    list: state.filteredClients,
    id: state.selectedClient.id
});

const mapDispatchToProps = dispatch => ({
    selectClient: id => dispatch(onSelectClient(id)),
    fetchClients: () => dispatch(fetchClientsMiddleware())
});

export default connect(mapStateToProps, mapDispatchToProps)(ClientsList);
