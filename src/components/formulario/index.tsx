import { Component, ReactNode } from "react";
import Botao from "../botao";

class Formulario extends Component {
  render(): ReactNode {
    return (
      <form action="">
        <div>
          <label htmlFor="tarefa">Adicione um novo estado</label>
          <input
            type="text"
            name="tarefa"
            id="tarefa"
            placeholder="O que você quer estudar"
            required
          />
        </div>
        <div>
          <label htmlFor="tempo">Tempo</label>
          <input
            type="time"
            name="tempo"
            id="tempo"
            min={"00:00:00"}
            max={"01:30:00"}
            required
          />
        </div>
        <Botao />
      </form>
    );
  }
}

export default Formulario;