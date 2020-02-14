import React from 'react';
import CriarPost from './Components/CriarPost/CriarPost'
import ListaDePosts from './Components/ListaDePosts/ListaDePosts'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      arrayPost: [
          { nome: 'Astronauta 1', fotoDePerfil: './img/perfil.png', urlPost: './img/astronauta.jpg' },
          { nome: 'Astronauta 2', fotoDePerfil: './img/perfil.png', urlPost: './img/astronauta2.jpg' },
          { nome: 'Astronauta 3', fotoDePerfil: './img/perfil.png', urlPost: './img/astronauta3.jpg' }
      ],

      todosOsPosts: []
    }
  }/*

  clicarEmPublicar = (perfil) => {

    const posts = this.state.arrayPost.filter((pessoa) => {
      return pessoa.nome === perfil;
    })


    }
*/
    listarTodosOsPosts = () => {
        const listaPosts = this.state.arrayPost.map((post)=> {
          return post;
        })

        this.setState({
          todosOsPosts: listaPosts
        })
    }


  render() {
    return (
      <div className="App">
      <CriarPost nome="Astronauta 1" clicarEmPublicar={this.clicarEmPublicar}/>
      {listarTodosOsPosts}
      <ListaDePosts lista={this.state.todosOsPosts}/>
    </div>
    )
  }
}

export default App;
