import React from 'react';
import styled from 'styled-components';

const Container =  styled.div`
`


class ListaDePosts extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Container>
                {this.props.lista}
            </Container>
        )
    }
}

export default ListaDePosts;