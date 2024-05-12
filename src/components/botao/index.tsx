import { ButtonHTMLAttributes, Component, ReactNode } from "react";
import styles from "./Botao.module.scss";

type BotaoPropsType = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

class Botao extends Component<BotaoPropsType> {
  render() {
    return (
      <button {...this.props} className={styles.botao}>
        {this.props.children}
      </button>
    );
  }
}

export default Botao;
