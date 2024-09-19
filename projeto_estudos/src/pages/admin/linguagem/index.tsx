import BasicTable from "@/components/basicos/BasicTable";
import Layout from "@/layout";

type Teste = "Nome" | "Sobrenome" | "Linguagem" | "Profissão"

export default function Linguagem() {
  return (
    <Layout>
      <BasicTable<Teste>
        columns={[
          "Nome",
          "Sobrenome",
          "Linguagem",
          "Profissão"
        ]}
        rows={[
          {
            id: 1,
            Nome: "Teste1",
            Sobrenome: "Bão",
            Linguagem: "Dart",
            Profissão: "Dev Frontend"
          },
          {
            id: 2,
            Nome: "Teste2",
            Sobrenome: "Bão",
            Linguagem: "Dart",
            Profissão: "Dev Frontend"
          },
          {
            id: 3,
            Nome: "Teste3",
            Sobrenome: "Bão",
            Linguagem: "Dart",
            Profissão: "Dev Frontend"
          },
          {
            id: 4,
            Nome: "Teste4",
            Sobrenome: "Bão",
            Linguagem: "Dart",
            Profissão: "Dev Frontend"
          },
        ]}
      />
    </Layout>
  );
}
