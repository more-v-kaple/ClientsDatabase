import React from 'react';
import { Provider } from 'react-redux';

import configureStore from 'Redux/store/configureStore';

const store = configureStore();

import Main from './components/Main';

const App = () => (
    <Provider store = { store }>
        <Main/>
    </Provider>
);

export default App;
