import styles from "./Info.module.scss";

export default function Info() {
  return (
    <div className={styles.info}>
      <img src="/images/avatar-jessica.jpeg" alt="Jessica dev" />
      <h1>Jessica Randall</h1>
      <h2>London, United Kingdom</h2>
      <p>"Front-end developer and avid reader."</p>
    </div>
  );
}
