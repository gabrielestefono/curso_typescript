import Barra from "./barra";
import styles from "./numero.module.scss";

interface NumeroProps {
  numero?: number;
}

export default function Numero({ numero }: Readonly<NumeroProps>) {
  const numeros: boolean[] = [];
  switch (numero) {
    case 0:
      numeros.push(...[true, true, true, false, true, true, true]);
      break;
    case 1:
      numeros.push(...[false, false, true, false, false, true, false]);
      break;
    case 2:
      numeros.push(...[true, false, true, true, true, false, true]);
      break;
    case 3:
      numeros.push(...[true, false, true, true, false, true, true]);
      break;
    case 4:
      numeros.push(...[false, true, true, true, false, true, false]);
      break;
    case 5:
      numeros.push(...[true, true, false, true, false, true, true]);
      break;
    case 6:
      numeros.push(...[true, true, false, true, true, true, true]);
      break;
    case 7:
      numeros.push(...[true, false, true, false, false, true, false]);
      break;
    case 8:
      numeros.push(...[true, true, true, true, true, true, true]);
      break;
    case 9:
      numeros.push(...[true, true, true, true, false, true, false]);
      break;
    default:
      numeros.push(...[true, true, true, true, true, true, true]);
  }
  return (
    <div>
      <Barra colored={numeros[0]} />
      <div className={styles.sideNumber}>
        <Barra side colored={numeros[1]} />
        <Barra side colored={numeros[2]} />
      </div>
      <Barra colored={numeros[3]} />
      <div className={styles.sideNumber}>
        <Barra side colored={numeros[4]} />
        <Barra side colored={numeros[5]} />
      </div>
      <Barra colored={numeros[6]} />
    </div>
  );
}
