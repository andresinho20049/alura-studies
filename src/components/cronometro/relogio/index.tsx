import style from "./Relogio.module.scss";

type RelogioPropsType = {
  tempo?: number;
}

const Relogio = ({ tempo = 0 }: RelogioPropsType) => {
  const minutes = Math.floor(tempo / 60);
  const seconds = tempo % 60;
  const [minutesDez, minutesUn] = String(minutes).padStart(2, "0");
  const [secondsDez, secondsUn] = String(seconds).padStart(2, "0");
  return (
    <>
      <span className={style.relogioNumero}>{minutesDez}</span>
      <span className={style.relogioNumero}>{minutesUn}</span>
      <span className={style.relogioDivisao}>:</span>
      <span className={style.relogioNumero}>{secondsDez}</span>
      <span className={style.relogioNumero}>{secondsUn}</span>
    </>
  );
};

export default Relogio;