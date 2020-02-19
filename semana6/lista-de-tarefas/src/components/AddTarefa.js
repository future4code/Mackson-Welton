import React from "react";

class AddTarefa extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      texto: "",
      completado: false
    };
  }

  mudaInput = event => {
    this.setState({
      texto: event.target.value
    });
  };

  render() {
    return (
      <div>
        <input onChange={this.mudaInput} value={this.state.texto} type="text" />
        <button
          onClick={() => {
            this.props.botaoAdd(
              Date.now(),
              this.state.texto,
              this.state.completado
            );
          }}
        >
          Adicionar
        </button>
      </div>
    );
  }
}

export default AddTarefa;
