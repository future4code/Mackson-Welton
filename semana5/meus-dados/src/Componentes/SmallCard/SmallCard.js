import React from 'react';
import PropTypes from 'prop-types';
import './SmallCard.css';

SmallCard.propTypes = {
    tipodedado: PropTypes.string,
    dado: PropTypes.string
}

function SmallCard(props) {
    return (
        <div className="SmallCard">
            <img src={props.icon} />
            <h5>{props.tipodedado}</h5>
            <p>{props.dado}</p>
        </div>
    )
}

export default SmallCard;