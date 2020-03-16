import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const WrapperCreatePlaylist = styled.div`
  width: 60%;
  min-width: 400px;
  margin: auto;
  text-align: center;
`

const Input = styled.input`
  width: 250px;
  margin: 5px auto;
  display: block;
`

const Buttons = styled.div`
  display: flex;
  justify-content: center;
`

const AddPlaylist = styled.img`
  width: 46px;
  height: 46px;
  cursor: pointer;
`

class CreatePlaylist extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      playlistName: ""
    }
  }

  handleClickButton = () => {
    this.fetchPlaylists(this.state.playlistName)
  }

  fetchPlaylists = async (name) => {
    
    try {
      const response = await axios.get(`${this.props.baseUrl}/playlists/getAllPlaylists`, {
        headers: {
          'auth': 'Mackson'
        }
      })

      const check = response.data.result.list

      if (!name) {

        alert("Não pode ser um nome vazio.")

      } else if (check.length === 0) {

        this.postPlaylis()

      } else {

        check.map(item => {

          if (name === item.name) {
            alert("Já existe uma playlist com o mesmo nome.")
          } else if (!name) {
            alert("Não pode ser um nome vazio.")
          } else {
            this.postPlaylis()
          }

          return false
        })
      }

      this.setState({
        playlistName: ""
      })

    } catch (err) {
      console.log(err.message)
    }
  }

  handleChangeInput = event => {

    this.setState({ playlistName: event.target.value })
  }

  postPlaylis = () => {

    const dataToSend = {
      name: this.state.playlistName
    }

    try {
      axios.post(`${this.props.baseUrl}/playlists/createPlaylist`, dataToSend, {
        headers: {
          'auth': 'Mackson'
        }
      })
      alert("Playlis criada com sucesso.")
    } catch (err) {
      alert("Houve um erro inesperado!")
      console.log(err.message)
    }
  }

  render() {
    return (
      <WrapperCreatePlaylist>

        <h2>Criar PlayList</h2>

        <Input
          placeholder="Escreva um nome para sua playlist"
          type="text"
          onChange={this.handleChangeInput}
          value={this.state.playlistName}
        />

        <Buttons>
          <AddPlaylist
            src={require("../icons/playlist_add.svg")}
            onClick={this.handleClickButton}
            alt="Criar nova playlist"
          />
          {this.props.buttonControl}
        </Buttons>
      </WrapperCreatePlaylist>
    )
  }
}

export default CreatePlaylist;
