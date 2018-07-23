import React from 'react';

import { Provider } from 'react-redux';

import configureStore from 'Redux/store/configureStore';

const store = configureStore();

const App = () => (
    <Provider store = { store }>

    </Provider>
);

export default App;
