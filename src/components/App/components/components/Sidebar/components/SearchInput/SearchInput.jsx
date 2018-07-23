import React, { Component } from 'react';

import Input from './components/Input';

const initialState = {
    value: ''
};

class SearchInput extends Component {
    constructor (props) {
        super(props);

        this.state = {
            ...initialState
        };
    }

    render () {
        const { value } = this.state;

        return (
            <Input
                // handleInput = { this.handleInput }
                placeholder = "&#128269; Search for client"
                value = { value }
            />
        );
    }
}

export default SearchInput;
