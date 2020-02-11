import React from 'react';
import PropTypes from 'prop-types';
import './BigCard.css';

BigCard.propTypes = {
    titulo: PropTypes.string,
    descricao: PropTypes.string
}

function BigCard(props) {
    return (
        <div className="BigCard">
            <h4>{ props.titulo }</h4>
            <img src={ props.img } />
            <p>{ props.descricao }</p>
        </div>
    )
}


export default BigCard;