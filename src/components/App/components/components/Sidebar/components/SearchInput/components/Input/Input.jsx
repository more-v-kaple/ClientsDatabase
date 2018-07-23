import React from 'react';
import PropTypes from 'prop-types';

import './input.scss';

const Input = props => {
    const {
        handleSubmit,
        handleFocus,
        handleInput,
        placeholder,
        handleBlur,
        value
    } = props;

    return (
        <div className = "input-wrapper">
            <input
                placeholder = { placeholder }
                onKeyPress = { handleSubmit }
                onFocus = { handleFocus }
                onInput = { handleInput }
                onBlur = { handleBlur }
                className = "input"
                value = { value }
                type = "text"
            />
        </div>
    );
}

Input.defaultProps = {
    placeholder: '',
    value: ''
};

Input.propTypes = {
    placeholder: PropTypes.string,
    handleSubmit: PropTypes.func,
    handleFocus: PropTypes.func,
    handleInput: PropTypes.func,
    handleBlur: PropTypes.func,
    value: PropTypes.string
};

export default Input;
