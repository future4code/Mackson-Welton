import React from 'react';
import PropTypes from 'prop-types';
import './ImageButton.css';

ImageButton.propTypes = {
    texto: PropTypes.string
}

function ImageButton(props) {
    return (
        <div className="ImageButton">
            <img src={ props.icon } />
            <p>{ props.texto }</p>
        </div>
    )
}


export default ImageButton;