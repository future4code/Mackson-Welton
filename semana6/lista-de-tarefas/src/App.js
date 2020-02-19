import React from "react";
import AddTarefa from "./components/AddTarefa";
import ListaDeTarefas from "./components/ListaDeTarefas";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tarefas: []
    };
  }

  componentDidMount() {
    if (localStorage.getItem("tarefas")) {
      this.setState({
        tarefas: JSON.parse(localStorage.getItem("tarefas"))
      });
    }
  }

  adicionarTarefa = (id, texto, completado) => {
    const novaTarefa = [...this.state.tarefas, { id, texto, completado }];
    localStorage.setItem("tarefas", JSON.stringify(novaTarefa));
    console.log(id);
    this.setState({
      tarefas: JSON.parse(localStorage.getItem("tarefas"))
    });
  };

  render() {
    const mostraLista = localStorage.getItem("tarefas") ? true : false;

    return (
      <div>
        <h1>Lista de Tarefas</h1>
        <AddTarefa botaoAdd={this.adicionarTarefa} />
        {mostraLista && <ListaDeTarefas />}
      </div>
    );
  }
}

export default App;
