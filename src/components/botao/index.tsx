import { Component, ReactNode } from "react";
import styles from "./Botao.module.scss";

type BotaoPropsType = {
  type?: "submit" | "reset" | "button";
  children: ReactNode;
};

class Botao extends Component<BotaoPropsType> {
  render() {
    return (
      <button type={this.props.type} className={styles.botao}>
        {this.props.children}
      </button>
    );
  }
}

export default Botao;
