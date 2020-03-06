import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const ShowPlaylists = styled.div`
    width: 60%;
    margin: auto;
    border: 1px solid red;
`

const IconPlaylist = styled.img`
    width: 46px;
    height: 46px;
    vertical-align: middle;
    cursor: pointer;
`

const IconAddMusic = styled.img`
    width: 24px;
    height: 24px;
    vertical-align: middle;
    cursor: pointer;
`

const IconDelete = styled.img`
    width: 24px;
    height: 24px;
    vertical-align: middle;
    cursor: pointer;
`

class GetAllPlaylists extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            allPlaylists: []
        }
    }

    componentDidMount() {
        this.fetchAllPlaylists()
    }

    componentDidUpdate() {
        this.fetchAllPlaylists()
    }

    fetchAllPlaylists = async () => {

        try {
            const response = await axios.get(`${this.props.baseUrl}/playlists/getAllPlaylists`, {
                headers: {
                    'auth': 'Mackson'
                }
            })
            this.setState({
                allPlaylists: response.data.result.list
            })

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
        } catch(err) {
            console.log(err.message)
        }
    }

    render() {

        const playlists = this.state.allPlaylists.map(item => {
            return (
                <p key={item.id}>
                    <IconPlaylist 
                    onClick={() => {this.props.handlePlaylistMusic(item.id)}} 
                    src={require("../icons/playlist_play-46px.svg")} 
                    alt="Ver playlist"/>
                    {item.name}
                    <IconAddMusic 
                    onClick={() => this.props.handleAddMusic(item.id)} 
                    src={require("../icons/add_music.svg")} 
                    alt="Adicionar Música"
                    />
                    <IconDelete 
                    onClick={() => this.handleDelete(item.id)} 
                    src={require("../icons/delete-24px.svg")} 
                    alt="Apagar"
                    />
                </p>)
        })

        return (
            <ShowPlaylists>
                <h2>Playlists</h2>
                {playlists}
            </ShowPlaylists>
        )
    }
}

export default GetAllPlaylists;