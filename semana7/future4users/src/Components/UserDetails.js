import React from 'react';
import axios from 'axios';

class UserDetails extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            details: [],
            erroMessage: undefined
        }
    }

    componentDidMount() {
        this.getUser(this.props.id);
    }

    getUser = userId => {

        const baseUrl = 'https://us-central1-future4-users.cloudfunctions.net/api'

        const request = axios.get(`${baseUrl}/users/getUser/${userId}`, {
            headers: {
                'Content-Type': 'application/json',
                'api-token': 'Mackson'
            }
        })

        request.then(response => {
            this.setState({ details: response.data.result })
        }).catch(error => {
            this.setState({
                erroMessage: "Não foi possível execultar essa função.",
                details: []
            })
        })
    }

    deleteUser = userId => {
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
            <div>
                <p>Nome: {this.state.details.name}</p>
                <p>Email: {this.state.details.email}</p>
                <button onClick={() => {this.deleteUser(this.props.id)}}>Deletar</button>
            </div>
        )
    }
}

export default UserDetails