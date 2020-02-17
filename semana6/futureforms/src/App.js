import React from 'react';
import styled from 'styled-components';
import DadosGerais from './Components/DadosGerais.js';
import EnsinoSuperior from './Components/EnsinoSuperior.js';
import DadosEducacionais from './Components/DadosEducacionais.js'
import MsgFinal from './Components/MsgFinal.js';

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
      numPagina: 1,
      ensinoSuperior: false
    }
  }

  nivelDeEscolaridade = (nivel) => {
    if (nivel === "Ensino Superior Completo" || nivel === "Ensino Superior Incompleto") {
      this.setState({
        ensinoSuperior: true
      })
    }
  }

  proximaPagina = () => {
    this.setState({
      numPagina: this.state.numPagina += 1
    })
  }


  render() {

    let pagina, botao

    if (this.state.numPagina === 1) {
      pagina = <DadosGerais escolaridade={this.nivelDeEscolaridade}/>
      botao = <BotaoProximo onClick={this.proximaPagina}>Prróxima etapa</BotaoProximo>
    } else if (this.state.numPagina === 2 && this.state.ensinoSuperior) {
      pagina = <EnsinoSuperior/>
      botao = <BotaoProximo onClick={this.proximaPagina}>Prróxima etapa</BotaoProximo>
    } else if (this.state.numPagina === 2){
      pagina = <DadosEducacionais/>
      botao = <BotaoProximo onClick={this.proximaPagina}>Prróxima etapa</BotaoProximo>
    } else if (this.state.numPagina === 3) {
      pagina = <MsgFinal/>
    }


    return (
      <Container>
        {pagina}
        {botao}
      </Container>
    )
  }
}

export default App;
