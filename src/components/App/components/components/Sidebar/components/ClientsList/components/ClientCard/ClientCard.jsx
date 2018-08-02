import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './clientCard.scss';

class ClientCard extends Component {

    shouldComponentUpdate (nextProps) {
        const { id } = this.props.info;

        if (nextProps.selectedId !== id
        && this.props.selectedId !== id ||
        this.props.selectedId === id &&
        nextProps.selectedId === id) {
            return false;
        }

        return true;
    }

    render () {
        const {
                avatar,
                name,
                job,
                id
            } = this.props.info,
            { selectedId } = this.props,
            active = selectedId === id ? 'active' : '';

        return (
            <div className = { `client-card ${active}` }
                data-id = { id }
            >
                <div className = "client-photo">
                    <img src= { avatar } alt= { name }/>
                </div>
                <div className = "client-info">
                    <p
                        className = "client-info__name">
                        { name }
                    </p>
                    <p>
                        { job }
                    </p>
                </div>
            </div>
        );
    }
}

ClientCard.propTypes = {
    selectedId: PropTypes.string.isRequired,
    info: PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        job: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired
    }).isRequired
};

export default ClientCard;
