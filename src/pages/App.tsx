import Cronometro from "../components/cronometro";
import Formulario from "../components/formulario";
import Lista from "../components/lista";
import { TarefaProvider } from "../context/TarefaContext";
import style from "./App.module.scss";

function App() {
  return (
    <div className={style.AppStyle}>
      <TarefaProvider>
        <Formulario />
        <Lista />
        <Cronometro />
      </TarefaProvider>
    </div>
  );
}

export default App;
