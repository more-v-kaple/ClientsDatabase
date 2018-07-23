import React from 'react';

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

export default Main;
