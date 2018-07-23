import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './clientsList.scss';

import ClientCard from './components/ClientCard';

class ClientsList extends Component {

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

export default ClientsList;
