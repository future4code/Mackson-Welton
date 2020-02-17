import React from 'react';
import styled from 'styled-components';

class EnsinoSuperior extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>
                <p>5. Por que você não terminou um curso de graduação?</p>
                <input type="text" />
                <p>6. Você fez algum curso complementar?</p>
                <select>
                    <option>Curso técnico</option>
                    <option>Curso de inglês</option>
                    <option>Não fiz curso complementar</option>
                </select>
            </div>
        )
    }
}

export default DadosGerais;