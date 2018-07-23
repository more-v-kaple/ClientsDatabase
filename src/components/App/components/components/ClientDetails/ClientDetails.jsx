import React from 'react';

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

export default ClientDetails;
