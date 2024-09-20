import BasicTable from "@/components/basicos/BasicTable";
import Layout from "@/layout";

interface LinguagemModel {
  id: number;
  nome: string;
}

export default function Linguagem() {
  return (
    <Layout>
      <BasicTable<LinguagemModel>
        columns={{
          nome: "Linguagem",
        }}
        rows={[
          {
            id: 1,
            nome: "Dart",
          },
          {
            id: 2,
            nome: "Node",
          },
          {
            id: 3,
            nome: "PHP",
          },
          {
            id: 4,
            nome: "Java",
          }
        ]}
      />
    </Layout>
  );
}
