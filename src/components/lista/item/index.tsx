import { useTarefaContext } from "../../../context/TarefaContext";
import { TarefaType } from "../../../types/tarefaType";
import style from "./Item.module.scss";

const Item = ({ tarefa, tempo, completado, selecionado, id }: TarefaType) => {

  const { selectTarefa } = useTarefaContext();

  const liStyle = `${style.item} ${selecionado ? style.itemSelecionado : ""} ${completado ? style.itemCompletado : ""}`

  return (
    <li 
        className={liStyle}
        onClick={() => selectTarefa(id)}
      >
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
    </li>
  );
};

export default Item;