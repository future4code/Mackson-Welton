import React from 'react';
import styled from 'styled-components';
import SingUp from './Components/SingUp';
import Users from './Components/Users';

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
      showList: "SingUp",
      showScreen: <SingUp/>
    }
  }

  showList = () => {

    if (this.state.showList === "SingUp") {

      this.setState({
        showList: "Users",
        showScreen: <Users/>
      })
    } else if (this.state.showList === "Users") {
      this.setState({
        showList: "SingUp",
        showScreen: <SingUp/>
      })
    } else {
      this.setState({
        showList: "Users",
        showScreen: <Users/>
      })
    }
  }

  render() {

    const TextButton = this.state.showList === "SingUp" ? "Lista de Usuários" : "Voltar"

    return (
      <Container>
        {this.state.showScreen}
        <ShowListButton onClick={this.showList}>{TextButton}</ShowListButton>
      </Container>
    )
  }
}

export default App;
