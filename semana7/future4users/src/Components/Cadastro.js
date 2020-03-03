import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  margin: auto;
`

const Name = styled.input`
  margin: 5px;
`

const Email = styled.input`
  margin: 5px;
`

const RegisterButton = styled.button`
  width: 40%;
  margin: 5px;
`

class Cadastro extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      email: '',
    }
  }

  register = () => {
    const data = {
      name: this.state.name,
      email: this.state.email
    }

    const baseUrl = 'https://us-central1-future4-users.cloudfunctions.net/api/users/createUser'

    const request = axios.post(`${baseUrl}`, data, {
      headers: {
        'Content-Type': 'application/json',
        'api-token': 'Mackson'
      }
    })

    request.then(response => {
      alert("Usuário cadastrado com sucesso!")
    }).catch(error => {
      alert("Houve um erro no cadastro!")
    })
  }

  changeName = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  changeEmail = (event) => {
    this.setState({
      email: event.target.value
    })
  }

  render() {

    return (
      <ContainerForm>
        <Name type="text" onChange={this.changeName} value={this.state.name} placeholder="Digite seu nome" />
        <Email type="email" onChange={this.changeEmail} value={this.state.email} placeholder="Digite seu email" />
        <RegisterButton onClick={this.register}>Cadastrar</RegisterButton>
      </ContainerForm>
    )
  }
}

export default Cadastro;
