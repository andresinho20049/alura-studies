import { useCallback, useEffect, useState } from "react";
import { useTarefaContext } from "../../context/TarefaContext";
import timeToSeconds from "../../utils/date";
import Botao from "../botao";
import style from "./Cronometro.module.scss";
import Relogio from "./relogio";

const Cronometro = () => {
  const { getSelected, finishTarefa } = useTarefaContext();

  const [time, setTime] = useState<number>(0);

  useEffect(() => {
    setTime(timeToSeconds(getSelected?.tempo));
  }, [getSelected]);

  useEffect(() => {
    if(time === 0) finishTarefa();
  }, [time])

  const cronometroFunc = useCallback(() => {
    const interval = setInterval(() => {
      setTime((currentTime) => {
        if (currentTime > 0) {
          return currentTime - 1;
        } else {
          clearInterval(interval);
          return 0;
        }
      });
    }, 1000);
  }, []);

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
      <div className={style.relogioWrapper}>
        <Relogio tempo={time} />
      </div>
      <Botao onClick={cronometroFunc}>Começar</Botao>
    </div>
  );
};

export default Cronometro;