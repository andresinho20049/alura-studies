import { useTarefaContext } from "../../context/TarefaContext";
import style from "./Lista.module.scss";
import Item from "./item";

const Lista = () => {

  const { tarefas } = useTarefaContext();
  
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </ul>
    </aside>
  );
};

export default Lista;
