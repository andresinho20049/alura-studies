import { TarefaType } from "../../../types/tarefaType";
import style from "./Item.module.scss";

const Item = ({ tarefa, tempo, completado, selecionado, id }: TarefaType) => {
  return (
    <li className={style.item}>
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
    </li>
  );
};

export default Item;