import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 50%;
  border: 1px solid red;
  margin: auto;
  text-align: center;
`

const Input = styled.input`
  width: 250px;
  margin: 5px auto;
  display: block;
`

const AddPlaylist = styled.img`
  margin: 5px auto;
  display: block;
  padding: 5px;
  cursor: pointer;
`

class CreatePlaylist extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      playlistName: "",
    }
  }

  handleChangeInput = event => {
    this.setState( { playlistName: event.target.value })
  }

  handleClickButton = () => {
    const dataToSend = {
      name: this.state.playlistName
    }

    try {
      axios.post(`${this.props.baseUrl}/playlists/createPlaylist`, dataToSend, {
        headers: {
          'auth': 'Mackson'
        }
      })
    }catch(err) {
      console.log(err.message)
    }
  }

  render() {
    return (
      <Wrapper>
        <h2>Criar PlayList</h2>
        <Input placeholder="Escreva um nome para sua playlist" type="text" onChange={this.handleChangeInput} value={this.state.playlistName} />
        <AddPlaylist src={require("../icons/playlist_add.svg")} onClick={this.handleClickButton} />
      </Wrapper>
    )
  }
}

export default CreatePlaylist;
