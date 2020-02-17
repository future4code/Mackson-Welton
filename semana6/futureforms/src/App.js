import React from 'react';
import styled from 'styled-components';
import DadosGerais from './Components/DadosGerais.js';

const Container = styled.div`
  text-align: center;
`

const BotaoProximo = styled.button`
  margin: 20px;
`

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      ensinoMedioIncompleto: false,
      ensinoMedioCompleto: false,
      ensinoSuperiorIncompleto: false,
      ensinoSuperiorCompleto: false
    }
  }

  nivelDeEscolaridade = (nivel) => {
    
  }

  render() {
    return (
      <Container>
        <DadosGerais escolaridade={this.nivelDeEscolaridade} />
      </Container>
    )
  }
}

export default App;
