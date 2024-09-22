import Header from "@/components/Header";
import styles from "../styles/Home.module.scss";
import Info from "@/components/Info";
import Title from "@/components/Title";
import Ingredients from "@/components/Ingredients";
import Instructions from "@/components/Instructions";
import NutricionalTable from "@/components/NutricionalTable";

export default function Home() {
  return (
    <main className={styles.home}>
      <Header />
      <Title />
      <Info />
      <Ingredients />
      <Instructions />
      <NutricionalTable />
    </main>
  );
}
