import React from "react";
import styled from "styled-components";
import "./ListaDeTarefas.css";

const Tarefas = styled.ul``;
const Tarefa = styled.li``;

class ListaDeTarefas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valorSelect: true,
      nunhum: "Nenhum",
      pendentes: false,
      completas: true
    };
  }

  marcar = (event, id, texto, completado) => {
    if (event.target.className === "completado") {
      event.target.className = "";
      const comp = !completado;
    } else {
      event.target.className = "completado";
      const comp = true;
      JSON.parse(localStorage.getItem("tarefas")).forEach(
        (item, index, array) => {
          if (item.id === id) {
            const atualiza = {
              id: item.id,
              texto: item.texto,
              completado: comp
            };
            localStorage.setItem(`tarefas`, JSON.stringify([atualiza]));
          }
        }
      );
    }
  };

  filtrar = event => {
    this.setState({
      valorSelect: event.target.value
    });
  };

  render() {
    const todasAsTarefas = JSON.parse(localStorage.getItem("tarefas")).map(
      (item, index) => {
        if (item.completado === this.state.valorSelect) {
          return (
            <Tarefa
              onClick={event =>
                this.marcar(event, item.id, item.texto, item.completado)
              }
              key={index}
              className={item.completado}
            >
              {item.texto}
            </Tarefa>
          );
        } else {
          return false;
        }
      }
    );

    return (
      <div>
        <p>Filtro</p>
        <select
          value={this.state.valorSelect}
          onChange={event => {
            this.filtrar(event);
          }}
        >
          <option value={this.state.nenhum}>Nenhum</option>
          <option value={this.state.pendentes}>Pendentes</option>
          <option value={this.state.completas}>Completas</option>
        </select>
        <Tarefas>{todasAsTarefas}</Tarefas>
      </div>
    );
  }
}

export default ListaDeTarefas;
