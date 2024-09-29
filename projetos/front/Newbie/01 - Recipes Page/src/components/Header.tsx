import styles from "./Header.module.scss";

interface HeaderProps {
  header: Header;
}

export default function Header({ header }: Readonly<HeaderProps>) {
  const { alt, image } = header;
  return (
    <header className={styles.header}>
      <img src={image} alt={alt} />
    </header>
  );
}
