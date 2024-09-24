import { MockedDataInfo } from "@/pages";
import styles from "./Info.module.scss";

type InfoProps = MockedDataInfo;

export default function Info({
  alt_imagem,
  endereco,
  imagem,
  nome,
  profissao,
}: Readonly<InfoProps>) {
  return (
    <div className={styles.info}>
      <img src={imagem} alt={alt_imagem} />
      <h1>{nome}</h1>
      <h2>{endereco}</h2>
      <p>{profissao}</p>
    </div>
  );
}
