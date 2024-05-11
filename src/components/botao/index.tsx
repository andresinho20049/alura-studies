import { Component } from "react";
import styles from "./Botao.module.scss";

class Botao extends Component {
  render() {
    return <button className={styles.botao}>Botao</button>;
  }
}

export default Botao;