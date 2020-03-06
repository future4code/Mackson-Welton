import React from 'react';
import axios from 'axios';


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
        this.handleAddMusic()

        this.setState({
            musicName: "",
            artistName: "",
            urlMusic: ""
        })
    }

    render() {
        return (
            <div>
                <input placeholder="Nome da Música" onChange={this.handleChangeInpuMusicName} type="text" value={this.state.musicName} />
                <input placeholder="Nome do Artista" onChange={this.handleChangeInputartistName} type="text" value={this.state.artistName} />
                <input placeholder="Url da Música" onChange={this.handleChangeInputurlMusic} type="text" value={this.state.urlMusic} />
                <button onClick={this.handleClickButtonAddMusic}>Adicionar</button>
            </div>
        )
    }
}

export default AddMusicToPlaylist;
