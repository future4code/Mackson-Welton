import React from 'react';
import styled from 'styled-components';

class EnsinoSuperior extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h1>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>
                <p>5. Qual curso?</p>
                <input type="text" />
                <p>6. Qual a unidade de ensino?</p>
                <input type="text" />
            </div>
        )
    }
}

export default DadosGerais;