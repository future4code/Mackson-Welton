import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Li = styled.li`
`

const DeleteButton = styled.button`
    margin: 0 5px;
`

class User extends React.Component {

    removeUser = userId => {
        if (window.confirm("Tem certeza de que deseja deletar?")) {

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
    }


    render() {
        return (
            <Li>
                <p onClick={() => {this.props.click(this.props.id)}}>{this.props.name}</p>
                <DeleteButton onClick={() => { this.removeUser(this.props.id) }}>Deletar</DeleteButton>
            </Li>
        )
    }
}

export default User