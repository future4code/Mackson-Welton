import React from 'react';
import styled from 'styled-components';
import Cadastro from './Components/Cadastro';
import ListaUsuarios from './Components/ListaUsuarios';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  margin: auto;
  padding: 10px;
  border: 1px solid black;
`

const ShowListButton = styled.button`
  margin: 5px;
`

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showList: false
    }
  }

  showList = () => {
    this.setState({
      showList: !this.state.showList
    })
  }

  render() {

    return (
      <Container>
        {this.state.showList ? <ListaUsuarios /> : <Cadastro />}
        {this.state.showList ? 
        <ShowListButton onClick={this.showList}>Ir para a página inicial</ShowListButton> : 
        <ShowListButton onClick={this.showList}>Mostrar usuários</ShowListButton>}
      </Container>
    )
  }
}

export default App;
