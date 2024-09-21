import styles from "./barra.module.scss";

interface BarraProps {
  side?: boolean;
  colored?: boolean;
}

export default function Barra({ side, colored }: Readonly<BarraProps>) {
  return (
    <div className={`${styles.barra} ${side ? styles.side : styles.notSide}`}>
      <div
        className={`${colored ? styles.trianguloParaEsquerda : ''}`}
      ></div>
      <div
        className={styles.intermediario}
        style={{ backgroundColor: `${colored ? "red" : "transparent"}` }}
      ></div>
      <div
        className={`${colored ? styles.trianguloParaDireita : ''}`}
      ></div>
    </div>
  );
}
