import { Component, Dispatch, FormEvent, ReactNode, SetStateAction } from "react";
import { TarefaType } from "../../types/tarefaType";
import Botao from "../botao";
import style from "./Formulario.module.scss";

type FormularioPropsType = {
  setTarefas: Dispatch<SetStateAction<TarefaType[]>>
}

class Formulario extends Component<FormularioPropsType> {

  handleAddTask(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const timemillis = new Date().getTime();
    const newId = "id_" + timemillis;
    const newTarefa = { ...this.state, id: newId };

    console.log(newTarefa)

    this.props.setTarefas((tarefas) => [...tarefas, newTarefa])
    
    this.setState({
      tarefa: "",
      tempo: "00:00",
      completado: false,
      selecionado: false
    });
  }

  state: Readonly<Omit<TarefaType, "id">> = {
    tarefa: "",
    tempo: "00:00",
    completado: false,
    selecionado: false
  };

  render(): ReactNode {
    return (
      <form className={style.novaTarefa} onSubmit={this.handleAddTask.bind(this)}>
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
  }
};

export default Formulario;