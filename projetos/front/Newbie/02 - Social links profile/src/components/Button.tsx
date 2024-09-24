import { useRouter } from "next/router";
import styles from "./Button.module.scss";

interface ButtonProps {
  text: string;
  link: string;
}

export default function Button({ text, link }: Readonly<ButtonProps>) {
  const { push } = useRouter();
  return (
    <button className={styles.button} onClick={() => push(link)}>
      {text}
    </button>
  );
}
