import GridButtons from "@/components/GridButtons";
import Info from "@/components/Info";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <main className={styles.home}>
      <section>
        <Info />
        <GridButtons />
      </section>
    </main>
  );
}
