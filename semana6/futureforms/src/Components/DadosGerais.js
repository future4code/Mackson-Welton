import React from 'react';

class DadosGerais extends React.Component {
    constructor(props) {
        super(props)

        this.state = { value: "Ensino Médio Incompleto" }
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
                <select onChange={(event) => {this.props.escolaridade(event.value)}}>
                    <option value="Ensino Médio Incompleto">Ensino médio incompleto</option>
                    <option value="Ensino Médio Completo">Ensino médio completo</option>
                    <option value="Ensino Superior Incompleto">Ensino superior incompleto</option>
                    <option value="Ensino Superior Completo">Ensino superior completo</option>
                </select>
            </div>
        )
    }
}

export default DadosGerais;