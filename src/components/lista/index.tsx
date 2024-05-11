import { TarefaType } from "../../types/tarefaType";
import style from "./Lista.module.scss";
import Item from "./item";

type ListaPropsType = {
  tarefas: TarefaType[]
}

const Lista = ({tarefas}: ListaPropsType) => {
  
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map((item, index) => (
          <Item key={index} {...item} />
        ))}
      </ul>
    </aside>
  );
};

export default Lista;
