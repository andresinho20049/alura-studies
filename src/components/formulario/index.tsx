import { Component, FormEvent, ReactNode } from "react";
import { TarefaContext } from "../../context/TarefaContext";
import { TarefaType } from "../../types/tarefaType";
import Botao from "../botao";
import style from "./Formulario.module.scss";

class Formulario extends Component {
  static contextType = TarefaContext;

  state: Readonly<Omit<TarefaType, "id">> = {
    tarefa: "",
    tempo: "00:00:00",
    completado: false,
    selecionado: false,
  };

  render(): ReactNode {
    return (
      <TarefaContext.Consumer>
        {(tarefaContext) => {
          const { handlerAddNewTarefa } = tarefaContext;

          const handleAddTask = (event: FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            const timemillis = new Date().getTime();
            const newId = "id_" + timemillis;
            const newTarefa = { ...this.state, id: newId };

            console.log(newTarefa);

            handlerAddNewTarefa(newTarefa);

            this.setState({
              tarefa: "",
              tempo: "00:00:00",
              completado: false,
              selecionado: false,
            });
          };
          return (
            <form className={style.novaTarefa} onSubmit={handleAddTask}>
              <div className={style.inputContainer}>
                <label htmlFor="tarefa">Adicione um novo estado</label>
                <input
                  type="text"
                  name="tarefa"
                  id="tarefa"
                  value={this.state.tarefa}
                  onChange={(event) => this.setState({...this.state, tarefa: event.target.value})}
                  placeholder="O que você quer estudar"
                  required
                />
              </div>
              <div className={style.inputContainer}>
                <label htmlFor="tempo">Tempo</label>
                <input
                  step={1}
                  type="time"
                  name="tempo"
                  id="tempo"
                  min={"00:00:00"}
                  max={"08:00:00"}
                  value={this.state.tempo}
                  onChange={(event) => this.setState({...this.state, tempo: event.target.value})}
                  required
                />
              </div>
              <Botao type="submit">Adicionar</Botao>
            </form>
          );
        }}
      </TarefaContext.Consumer>
    );
  }
}

export default Formulario;