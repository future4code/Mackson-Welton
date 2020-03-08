import React from 'react';
import styled from 'styled-components';
import CreatePlaylist from './components/CreatePlaylist';
import GetAllPlaylists from './components/GetAllPlaylists';
import AddMusicToPlaylist from './components/AddMusicToPlaylist';
import GetPlaylistMusics from './components/GetPlaylistMusics';
import NavigationButtons from './components/NavigationsButtons';

const baseUrl = "https://us-central1-spotif4.cloudfunctions.net/api";

const Wrapper = styled.div`
  width: 400px;
  margin: auto;
  border-radius: 20px;
  padding: 10px;
  background-color: #FF0000;
`

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      button: <NavigationButtons actualScreen="CreatePlaylist" click={this.handleChangeScreen}/>,
      screenTitle: "",
      screen: ""
    }
  }

  componentDidMount() {
    this.setState({
      button: <NavigationButtons actualScreen="CreatePlaylist" click={this.handleChangeScreen}/>,
      screenTitle: "CreatePlaylist",
      screen: <CreatePlaylist buttonControl={this.state.button} baseUrl={baseUrl} />
    })
  }

  handleChangeScreen = () => {
    if (this.state.screenTitle === "CreatePlaylist") {
      const button = <NavigationButtons actualScreen="GetAllPlaylists" click={this.handleChangeScreen}/>

      this.setState({
        screenTitle: "GetAllPlaylists",
        screen: <GetAllPlaylists
        handlePlaylistMusic={this.screenPlaylistMusics}
        handleAddMusic={this.screenAddMusic}
        buttonControl={button} 
        baseUrl={baseUrl}/>
      })
    } else if (this.state.screenTitle === "GetAllPlaylists") {
      
      this.setState({
        screenTitle: "CreatePlaylist",
        screen: <CreatePlaylist buttonControl={this.state.button} baseUrl={baseUrl} />
      })
    } else {
      const button = <NavigationButtons actualScreen="GetAllPlaylists" click={this.handleChangeScreen}/>

      this.setState({
        screenTitle: "GetAllPlaylists",
        screen: <GetAllPlaylists
        handlePlaylistMusic={this.screenPlaylistMusics}
        handleAddMusic={this.screenAddMusic}
        buttonControl={button} 
        baseUrl={baseUrl}/>
      })
    }
}

  screenAddMusic = id => {
    const button = <NavigationButtons actualScreen="AddToMusicPlaylist" click={this.handleChangeScreen}/>

    this.setState({
      screenTitle: "AddToMusicPlaylist",
      screen: <AddMusicToPlaylist 
      buttonControl={button}
      baseUrl={baseUrl} 
      id={id} />
    })
  }

  screenPlaylistMusics = id => {
    const button = <NavigationButtons actualScreen="GetPlaylistMusics" click={this.handleChangeScreen}/>

    this.setState({
      screenTitle: "GetPlaylistMusics",
      screen: <GetPlaylistMusics 
      buttonControl={button}
      baseUrl={baseUrl} 
      id={id} />
    })
  }

  render() {
    return (
      <Wrapper>
        {this.state.screen}
      </Wrapper>
    )
  }
}

export default App;
