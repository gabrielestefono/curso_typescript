import Header from "@/components/Header";
import Info from "@/components/Info";
import Title from "@/components/Title";
import Ingredients from "@/components/Ingredients";
import Instructions from "@/components/Instructions";
import NutricionalTable from "@/components/NutricionalTable";
import { mockedData } from "@/mock";

export default function Home() {
  // SIMULA A REQUISIÇÃO DE UMA API
  const { header, info, ingredients, instruction, nutrition, title_info } =
    mockedData;
  return (
    <main>
      <div>
        <Header header={header} />
        <Title titleInfo={title_info} />
        {/*<Info />
      <Ingredients />
      <Instructions />
      <NutricionalTable /> */}
      </div>
    </main>
  );
}
