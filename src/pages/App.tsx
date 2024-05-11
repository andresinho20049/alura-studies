import { useState } from "react";
import Cronometro from "../components/cronometro";
import Formulario from "../components/formulario";
import Lista from "../components/lista";
import style from "./App.module.scss";
import { TarefaType } from "../types/tarefaType";

function App() {
  const [tarefas, setTarefas] = useState<TarefaType[]>([]);

  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas}/>
      <Lista tarefas={tarefas}/>
      <Cronometro />
    </div>
  );
}

export default App;
