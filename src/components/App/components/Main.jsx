import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './main.scss';

import ClientDetails from './components/ClientDetails';
import NoClient from './components/NoClient';
import Sidebar from './components/Sidebar';

const Main = props => {
    const { id } = props;

    return (
        <div className="container">
            <Sidebar/>
            {
                id ?
                    <ClientDetails/>
                    : <NoClient/>
            }
        </div>
    );
}

Main.propTypes = {
    id: PropTypes.string
};

const mapStateToProps = state => (
    {
        id: state.selectedClient.id
    }
);

export default connect(mapStateToProps)(Main);
