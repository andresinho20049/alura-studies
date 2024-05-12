import { useEffect, useState } from "react";
import timeToSeconds from "../../utils/date";
import Botao from "../botao";
import style from "./Cronometro.module.scss";
import Relogio from "./relogio";
import { useTarefaContext } from "../../context/TarefaContext";

const Cronometro = () => {

  const {getSelected} = useTarefaContext();

  const [time, setTime] = useState<number>(0);

  useEffect(() => {
    setTime(timeToSeconds(getSelected?.tempo));
  }, [getSelected]);

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
      <div className={style.relogioWrapper}>
        <Relogio tempo={time} />
      </div>
      <Botao>Começar</Botao>
    </div>
  );
};

export default Cronometro;