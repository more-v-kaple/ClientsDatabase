import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import getClientInfo from 'Redux/selectors/getClientInfo';

import './clientDetails.scss';

const ClientDetails = props => {
    const {
        zipCode,
        country,
        avatar,
        street,
        email,
        phone,
        name,
        city,
        job
    } = props.info;

    return (
        <div className = "client-details">
            <div className = "client-photo">
                <img src = { avatar } alt = { `photo of ${ name }`}/>
            </div>
            <div className = "client-info">
                <h1
                    className = "client-info__name marked"
                >
                    { name }
                </h1>
                <p className = "client-info__job marked" >{ job }</p>
                <p>
                    <span className = "marked">Address: </span>
                    { country }, { zipCode }, { city }, { street }
                </p>
                <p>
                    <span className = "marked">Contact: </span>
                    { email }, { phone }
                </p>
            </div>
        </div>
    );
}

ClientDetails.propTypes = {
    info: PropTypes.shape({
        zipCode: PropTypes.string.isRequired,
        country: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        street: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        city: PropTypes.string.isRequired,
        job: PropTypes.string.isRequired
    }).isRequired
};

const mapStateToProps = state => {
    const { id } = state.selectedClient;

    return {
        info: getClientInfo(state.clients, id)
    };
};

export default connect(mapStateToProps)(ClientDetails);
