import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './main.scss';

import { getIsSelectedClient } from 'Redux/selectors';

import ClientDetails from './components/ClientDetails';
import NoClient from './components/NoClient';
import Sidebar from './components/Sidebar';

const Main = props => {
    const { isSelectedClient } = props;

    return (
        <div className="container">
            <Sidebar/>
            {
                isSelectedClient ?
                    <ClientDetails/>
                    : <NoClient/>
            }
        </div>
    );
}

Main.propTypes = {
    isSelectedClient: PropTypes.bool
};

const mapStateToProps = state => (
    {
        isSelectedClient: getIsSelectedClient(state)
    }
);

export default connect(mapStateToProps)(Main);
