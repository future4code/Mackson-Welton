import React from 'react';
import PropTypes from 'prop-types';
import './Feed.css';

class Feed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            curtida: false,
            numCurtida: 0,
            iconeCurti: require("../../img/curti.svg"),
            comentarios: 0,
            exibirCaixa: false
        }
    }

    curtidas = () => {

        if (this.state.curtida) {
            this.setState({
                numCurtida: 0,
                curtida: false,
                iconeCurti: require("../../img/curti.svg")
            })
        } else {
            this.setState({
                numCurtida: 1,
                curtida: true,
                iconeCurti: require("../../img/curtido.svg")
            })
        }
    }

    novoComentario = () => {
        const numeroAtual = this.state.comentarios;
        this.setState({ comentarios: numeroAtual + 1 })
        this.state.exibirCaixa = false
    }

    botaoComentario = () => {
        if (this.state.exibirCaixa) {
            this.setState({
                exibirCaixa: false
            })
        }
        else {
            this.setState({
                exibirCaixa: true
            })
        }
    }

    exibirCaixa = () => {
        if (this.state.exibirCaixa) {
            return (<div className="caixaDeComentario"><input type="text"></input><button onClick={this.novoComentario}>Comentar</button></div>)
        } else {
            return
        }
    }

    render() {
        return (
            <div className="Feed">
                <img className="perfil" src={this.props.perfil} />
                <p>{this.props.nome}</p>
                <img className="post" src={this.props.post} />
                <div className="botoes">
                    <div className="curti">
                        <img onClick={this.curtidas} src={this.state.iconeCurti} />
                        <p>{this.state.numCurtida}</p>
                    </div>
                    <div className="comentarios">
                        <img onClick={this.botaoComentario} src={require("../../img/comentarios.svg")} />
                        <p>{ this.state.comentarios }</p>
                    </div>
                </div>
                {this.exibirCaixa()}
            </div>
        )
    }
}

Feed.protoTypes = {
    perfil: PropTypes.string.isRequired,
    nome: PropTypes.string.isRequired,
    post: PropTypes.string.isRequired,
}

export default Feed;