import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const ShowPlaylists = styled.div`
	text-align: center;
`

const Playlist = styled.div`
	display: flex;
  justify-content: space-between;
  align-items: center;
	margin: 5px auto;
`

const Music = styled.div`
	display: flex;
	height: 40px;
  align-items: center;
  background: white;
  border-radius: 20px;
	flex-grow: 1;
	margin-right: 5px;

  &:hover {
	background: gray;
	cursor: pointer;
  }
`

const IconPlay = styled.img`
	width: 30px;
	height: 30px;
	cursor: pointer;
`

const Title = styled.p`
  font-size: 20px;
  margin-left: 5px;
`

const IconsControl = styled.div`
`

const IconAddMusic = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`

const IconDelete = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`

class GetAllPlaylists extends React.Component {

	constructor(props) {
		super(props)

		this.state = {
			allPlaylists: [],
			screenTitle: "GetAllPlaylist",
			loaded: "Carregando..."
		}
	}

	componentDidMount() {
		this.fetchAllPlaylists()
	}

	fetchAllPlaylists = async () => {

		try {
			const response = await axios.get(`${this.props.baseUrl}/playlists/getAllPlaylists`, {
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
					allPlaylists: response.data.result.list
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

			this.fetchAllPlaylists()

		} catch (err) {
			console.log(err.message)
		}
	}

	render() {
		const playlists = this.state.allPlaylists.map(item => {
			return (
				<Playlist key={item.id}>
					<Music onClick={() => { this.props.handlePlaylistMusic(item.id) }} >
						<IconPlay
							src={require("../icons/play.svg")}
							alt="Ver playlist" />
						<Title>{item.name}</Title>
					</Music>
					<IconsControl>
						<IconAddMusic
							onClick={() => this.props.handleAddMusic(item.id)}
							src={require("../icons/add_music.svg")}
							alt="Adicionar Música"
						/>
						<IconDelete
							onClick={() => this.handleDelete(item.id)}
							src={require("../icons/delete.svg")}
							alt="Apagar"
						/>
					</IconsControl>
				</Playlist>)
		})

		return (
			<ShowPlaylists>
				<h2>Playlists</h2>
				{playlists.length === 0 ? this.state.loaded : playlists}
				{this.props.buttonControl}
			</ShowPlaylists>
		)
	}
}

export default GetAllPlaylists;