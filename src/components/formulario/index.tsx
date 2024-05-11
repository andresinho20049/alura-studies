import { FormEvent, useCallback } from "react";
import Botao from "../botao";
import style from "./Formulario.module.scss";

const Formulario = () => {
  const handleAddTask = useCallback((event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log("handleAddTask called")
  }, []);

  return (
    <form className={style.novaTarefa} onSubmit={handleAddTask}>
      <div className={style.inputContainer}>
        <label htmlFor="tarefa">Adicione um novo estado</label>
        <input
          type="text"
          name="tarefa"
          id="tarefa"
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
          max={"01:30:00"}
          required
        />
      </div>
      <Botao />
    </form>
  );
};

export default Formulario;