import React from 'react';

import './clientCard.scss';

const ClientCard = props => {
    const {
            avatar,
            name,
            job,
            id
        } = props.info,
        { selectedId } = props,
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
                <p> { job } </p>
            </div>


        </div>
    );
}

export default ClientCard;
