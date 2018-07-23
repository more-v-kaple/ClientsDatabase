import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import filterClientsMiddleware from 'Redux/middlewares/filterClientsMiddleware';

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

    componentDidUpdate (prevProps, prevState) {
        const { value } = this.state,
            { filterClients } = this.props;

        prevState.value !== value && filterClients(value)
    }

    handleInput = e => {
        const value = e.target.value;

        this.setState({ value });
    }

    render () {
        const { value } = this.state;

        return (
            <Input
                handleInput = { this.handleInput }
                placeholder = "&#128269; Search for client"
                value = { value }
            />
        );
    }
}

SearchInput.propTypes = {
    filterClients: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
    filterClients: keyword => dispatch(filterClientsMiddleware(keyword))
});

export default connect(null, mapDispatchToProps)(SearchInput);
