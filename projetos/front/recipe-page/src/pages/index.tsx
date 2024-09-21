import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <main className={styles.home}>
      <div>
        <img
          src="/images/image-omelette.jpeg"
          alt=""
          style={{ width: "100%", height: "300px", maxHeight: "26vh" }}
        />
        <p>Simple Omelette Recipe</p>
      </div>
    </main>
  );
}
