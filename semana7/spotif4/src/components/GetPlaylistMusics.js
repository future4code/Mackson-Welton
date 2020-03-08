import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const ShowPlaylists = styled.div`
  width: 60%;
  min-width: 400px;
  margin: auto;
  text-align: center;
`

const Music = styled.div`
  width: 400px;
  margin: auto;
  text-align: center;
  background: white;
  border-radius: 20px;
`


const IconDelete = styled.img`
  width: 24px;
  height: 24px;
  vertical-align: middle;
  cursor: pointer;
`


class GetPlaylistMusic extends React.Component {

	constructor(props) {
		super(props)

		this.state = {
			allMusics: [],
			loaded: "Carregando..."
		}
	}

	componentDidMount() {
		this.fetchPlaylistMusic()
	}

	fetchPlaylistMusic = async () => {
		try {
			const response = await axios.get(`${this.props.baseUrl}/playlists/getPlaylistMusics/${this.props.id}`, {
				headers: {
					'auth': 'Mackson'
				}
			})

			if (response.data.result.quantity === 0) {
				this.setState({
					loaded: "Não há músicas nesta lista."
				})
			} else {
				this.setState({
					allMusics: response.data.result.musics
				})
			}

		} catch (err) {
			console.log(err.message)
		}
	}

	handleDelete = id => {

		try {
			axios.delete(`${this.props.baseUrl}/playlists/deletePlaylist?playlistId=${id}`, {
				headers: {
					'auth': 'Mackson'
				}
			})
		} catch (err) {
			console.log(err.message)
		}
	}

	render() {

		const playlists = this.state.allMusics.map(item => {
			return (
				<Music key={item.id}>
					<p>Música: {item.name}</p>
					<p>Artista: {item.artist}</p>
					<audio src={item.url} controls></audio>
					<p>
						<IconDelete onClick={() => this.handleDelete(item.id)} src={require("../icons/delete.svg")} />
					</p>

				</Music>)
		})

		return (
			<ShowPlaylists>
				<h2>Play Músicas</h2>
				{playlists.length === 0 ? this.state.loaded : playlists}
				{this.props.buttonControl}
			</ShowPlaylists>
		)
	}
}

export default GetPlaylistMusic;