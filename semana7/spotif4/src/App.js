import React from 'react';
import styled from 'styled-components';
import CreatePlaylist from './components/CreatePlaylist';
import GetAllPlaylists from './components/GetAllPlaylists';
import AddMusicToPlaylist from './components/AddMusicToPlaylist';
import GetPlaylistMusics from './components/GetPlaylistMusics';

const baseUrl = "https://us-central1-spotif4.cloudfunctions.net/api";

const Wrapper = styled.div`
  width: 80%;
  margin: auto;
  border: 1px solid black;
`

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      screenTitle: "",
      screen: ""
    }
  }

  componentDidMount() {
    this.setState({
      screenTitle: "CreatePlaylist",
      screen: <CreatePlaylist baseUrl={baseUrl} />
    })
  }

  handleChangeScreen = (screenTitle, id) => {

    if (screenTitle === "CreatePlaylist") {
      this.setState({
        screenTitle: "GetAllPlaylists",
        screen: <GetAllPlaylists baseUrl={baseUrl}
          handlePlaylistMusic={this.screenPlaylistMusics}
          handleAddMusic={this.screenAddMusic} />
      })

    } else if (screenTitle === "GetAllPlaylists") {
      this.setState({
        screenTitle: "CreatePlaylist",
        screen: <CreatePlaylist baseUrl={baseUrl} />
      })
  }
}

  screenAddMusic = id => {
    this.setState({
      screenTitle: "AddToMusicPlaylist",
      screen: <AddMusicToPlaylist baseUrl={baseUrl} id={id} />
    })
  }

  screenPlaylistMusics = id => {
    this.setState({
      screenTitle: "GetPlaylistMusics",
      screen: <GetPlaylistMusics baseUrl={baseUrl} id={id} />
    })
  }

  render() {
    const textButton = 
    this.state.screenTitle === "CreatePlaylist" ? "Mostrar Playlists" : 
    this.state.screenTitle === "GetAllPlaylists" ? "Voltar" : "Voltar"

    return (
      <Wrapper>

        {this.state.screen}

        <button onClick={() => { this.handleChangeScreen(this.state.screenTitle) }}>
          {textButton}
        </button>

      </Wrapper>
    )
  }
}

export default App;
