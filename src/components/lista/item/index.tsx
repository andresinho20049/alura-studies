import { useTarefaContext } from "../../../context/TarefaContext";
import { TarefaType } from "../../../types/tarefaType";
import style from "./Item.module.scss";

const Item = ({ tarefa, tempo, completado, selecionado, id }: TarefaType) => {

  const { selectTarefa, isTiming } = useTarefaContext();

  const liStyle = `${style.item} ${selecionado ? style.itemSelecionado : ""} ${completado ? style.itemCompletado : ""}`

  return (
    <li 
        className={liStyle}
        onClick={() => !isTiming && !completado && selectTarefa(id)}
      >
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
      {completado && <span className={style.concluido} aria-label="Tarefa concluida"></span>}
    </li>
  );
};

export default Item;