import React from 'react';
import styled from 'styled-components';

const Container =  styled.div`
    width: 400px;
    margin: auto;
    padding: 10px;
    border: 1px solid gray;
`
const FotoDePerfil = styled.img`
    width: 100px;
    heigth: 100px;
    border-radius: 100%;
`

const Nome = styled.p`
    font-size: 2rem;
    font-weight: bold;
`

const UploadImagem = styled.input`
    margin: 20px;
`

const Publicar = styled.button`
    display: block;
    margin-left: 20px; 
`


class CriarPost extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Container>
                <Nome>{this.props.nome}</Nome>
                <UploadImagem type="url" />
                <Publicar onClick={() => {this.props.clicarEmPublicar(this.props.nome)}}>
                    Publicar
                </Publicar>
            </Container>
        )
    }
}

export default CriarPost;