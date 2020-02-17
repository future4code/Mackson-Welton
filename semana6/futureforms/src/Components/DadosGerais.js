import React from 'react';

class DadosGerais extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div>
                <h1>ETAPA 1 - DADOS GERAIS</h1>
                <p>1. Qual o seu nome?</p>
                <input type="text" />
                <p>2. Qual sua idade?</p>
                <input type="text" />
                <p>3. Qual seu email?</p>
                <input type="email" />
                <p>4. Qual a sua escolaridade</p>
                <select onChange={(event) => {this.props.escolaridade(event.target.value)}}>
                    <option value="Ensino Médio Incompleto">Ensino médio incompleto</option>
                    <option value="Ensino Médio completo">Ensino médio completo</option>
                    <option value="Ensino Superior incompleto">Ensino superior incompleto</option>
                    <option value="Ensino Superior completo">Ensino superior completo</option>
                </select>
            </div>
        )
    }
}

export default DadosGerais;