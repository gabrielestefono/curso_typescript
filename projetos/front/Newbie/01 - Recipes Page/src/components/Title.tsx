import styles from "./Title.module.scss";

interface TitleProps {
  titleInfo: TitleInfo;
}

export default function Title({ titleInfo }: Readonly<TitleProps>) {
  const { description, title } = titleInfo;
  return (
    <div className={styles.title}>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}
