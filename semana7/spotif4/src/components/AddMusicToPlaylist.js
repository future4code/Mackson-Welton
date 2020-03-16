import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Wrapper = styled.div`
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
	align-items: center;
`

const AddMusic = styled.img`
  width: 46px;
	height: 46px;
  margin: 5px;
  padding: 5px;
  cursor: pointer;
`


class AddMusicToPlaylist extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			musicName: "",
			artistName: "",
			urlMusic: ""
		}
	}

	handleChangeInput = event => {
		this.setState({ playlistName: event.target.value })
	}

	handleAddMusic = () => {
		const dataToSend = {
			playlistId: this.props.id,
			music: {
				name: this.state.musicName,
				artist: this.state.artistName,
				url: this.state.urlMusic
			}
		}
		try {
			axios.put(`${this.props.baseUrl}/playlists/addMusicToPlaylist`, dataToSend, {
				headers: {
					'auth': 'Mackson'
				}
			})

			alert("Sua música foi adicionada a sua playlist com sucesso")
		} catch (err) {
			console.log(err.message)
		}
	}

	handleChangeInpuMusicName = event => {
		this.setState({
			musicName: event.target.value
		})
	}

	handleChangeInputartistName = event => {
		this.setState({
			artistName: event.target.value
		})
	}

	handleChangeInputurlMusic = event => {
		this.setState({
			urlMusic: event.target.value
		})
	}

	handleClickButtonAddMusic = () => {
		
		if (!this.state.musicName && !this.state.artistName) {
			alert("Não pode conter campos vazios")
			
		} else if (!this.state.urlMusic) {
			alert("Não pode conter campos vazios")
		}
		
		else if (this.state.urlMusic.includes("http://") && this.state.urlMusic.includes(".mp3")){
			this.handleAddMusic()
		} else {
			alert("Link de música invalido")
		}

		this.setState({
			musicName: "",
			artistName: "",
			urlMusic: ""
		})
	}

	render() {
		return (
			<Wrapper>
				<h2>Nova música</h2>
				<Input placeholder="Nome da Música" onChange={this.handleChangeInpuMusicName} type="text" value={this.state.musicName} />
				<Input placeholder="Nome do Artista" onChange={this.handleChangeInputartistName} type="text" value={this.state.artistName} />
				<Input placeholder="Url da Música" onChange={this.handleChangeInputurlMusic} type="text" value={this.state.urlMusic} />

				<Buttons>
					<AddMusic src={require("../icons/playlist_add.svg")} onClick={this.handleClickButtonAddMusic} />
					{this.props.buttonControl}
				</Buttons>
			</Wrapper>
		)
	}
}

export default AddMusicToPlaylist;
