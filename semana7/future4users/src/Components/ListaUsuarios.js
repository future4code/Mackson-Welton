import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const ContainerList = styled.div``

const DeleteButton = styled.button`
    margin: 0 5px;
`

class ListaUsuarios extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            allUsers: [],
            erroMessage: undefined,
        }
    }

    componentDidMount() {
        this.getAllUsers();
    }

    getAllUsers = () => {
        const baseUrl = 'https://us-central1-future4-users.cloudfunctions.net/api'

        const request = axios.get(`${baseUrl}/users/getAllUsers`, {
            headers: {
                'Content-Type': 'application/json',
                'api-token': 'Mackson'
            }
        })

        request.then(response => {
            this.setState({allUsers: response.data.result})
        }).catch(error => {
            this.setState({
                erroMessage: "Não foi possível execultar essa função."
            })
        })
    }

    removeUser = userId => {
        console.log(userId)
        const baseUrl = 'https://us-central1-future4-users.cloudfunctions.net/api'
        const request = axios.delete(`${baseUrl}/users/deleteUser?id=${userId}`, {
            headers: {
                'Content-Type': 'application/json',
                'api-token': 'Mackson'
            }
        })

        request.then(response => {
            alert("Deletado com sucesso.")
        }).catch(error => {
            alert("Não foi possível execultar essa função.")
        })
    }

    render() {
        const userList = this.state.allUsers.map(user => {
            const remove = () => {
                this.removeUser(user.id)
            }
            return <li key={user.id}>{user.name}<DeleteButton onClick={remove}>Deletar</DeleteButton></li>
        })

        return(
            <ContainerList>
                <ul>{userList}</ul>
            </ContainerList>
        )
    }
}

export default ListaUsuarios;