import React from 'react';

import './sidebar.scss';

import SearchInput from './components/SearchInput';
import ClientsList from './components/ClientsList';

const Sidebar = () => (
    <div className="sidebar">
        <SearchInput/>
        <ClientsList/>
    </div>
);

export default Sidebar;
