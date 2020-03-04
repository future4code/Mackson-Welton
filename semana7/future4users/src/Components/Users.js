import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import User from './User.js'
import UserDetails from './UserDetails.js';

const ContainerList = styled.div``

class Users extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            allUsers: [],
            erroMessage: undefined,
            showScreen: true,
            userId: ""
        }
    }

    componentDidMount() {
        this.getAllUsers();
    }

    componentDidUpdate() {
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
            this.setState({ allUsers: response.data.result })
        }).catch(error => {
            this.setState({
                erroMessage: "Não foi possível execultar essa função.",
                allUsers: []
            })
        })
    }

    showScreen = userId => {
        const id = userId
        this.setState({
            showScreen: !this.state.showScreen
        })

        this.setState({
            userId: id
        })
    }

    render() {
        const userList = this.state.allUsers.map(user => {
            return <User click={this.showScreen} key={user.id} id={user.id} name={user.name} />
        })
        return (
            <ContainerList>
                {this.state.showScreen ? <ul>{userList}</ul> : <UserDetails id={this.state.userId} />}
            </ContainerList>
        )
    }
}

export default Users;