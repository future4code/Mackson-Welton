import React from 'react';
import styled from 'styled-components';

const NavigationButton = styled.img`
    width: 46px;
    height: 46px;
    cursor: pointer;
`

class NavigationButtons extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            actualScreen: this.props.actualScreen,
            img: ""
        }
    }
    componentDidMount() {
        if(this.props.actualScreen !== "CreatePlaylist") {
            
            this.setState({
                img: require("../icons/back.svg")
            })
        } else {
            this.setState({
                img: require("../icons/playlist_play.svg")
            })
        }
    }
    render() {
        return (
            <div>
                <NavigationButton 
                onClick={() => this.props.click(this.props.title)} 
                src={this.state.img} 
                alt="Ver todas as playlists" />
            </div>
        )
    }
}

export default NavigationButtons;