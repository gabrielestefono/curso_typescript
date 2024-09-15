export interface Framework {
  id: number;
  nome: string;
  versoes: Versao[];
}

export interface Versao {
  id: number;
  versao: number;
  comando_inicializacao: string;
}
