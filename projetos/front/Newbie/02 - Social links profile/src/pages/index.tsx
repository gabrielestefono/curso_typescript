import GridButtons from "@/components/GridButtons";
import Info from "@/components/Info";
import styles from "../styles/Home.module.scss";

export interface MockedDataSocialItem {
  redeSocial: string;
  link: string;
}

export interface MockedDataInfo {
  imagem: string;
  alt_imagem: string;
  nome: string;
  endereco: string;
  profissao: string;
}

export interface MockedDataSocial {
  github: MockedDataSocialItem;
  frontendMentor: MockedDataSocialItem;
  linkedin: MockedDataSocialItem;
  twitter: MockedDataSocialItem;
  instagram: MockedDataSocialItem;
}

interface MockedData {
  info: MockedDataInfo;
  social: MockedDataSocial;
}

const mockData: MockedData = {
  info: {
    imagem: "/images/avatar-jessica.jpeg",
    alt_imagem: "Jessica dev",
    nome: "Jessica Randall",
    endereco: "London, United Kingdom",
    profissao: "Front-end developer and avid reader.",
  },
  social: {
    github: {
      redeSocial: "GitHub",
      link: "https://www.google.com/",
    },
    frontendMentor: {
      redeSocial: "FrontendMentor",
      link: "https://www.google.com/",
    },
    linkedin: {
      redeSocial: "LinkedIn",
      link: "https://www.google.com/",
    },
    twitter: {
      redeSocial: "Twitter",
      link: "https://www.google.com/",
    },
    instagram: {
      redeSocial: "Instagram",
      link: "https://www.google.com/",
    },
  },
};

export default function Home() {
  return (
    <main className={styles.home}>
      <section>
        <Info
          alt_imagem={mockData.info.alt_imagem}
          endereco={mockData.info.endereco}
          imagem={mockData.info.imagem}
          nome={mockData.info.nome}
          profissao={mockData.info.profissao}
        />
        <GridButtons
          frontendMentor={mockData.social.frontendMentor}
          github={mockData.social.github}
          instagram={mockData.social.instagram}
          linkedin={mockData.social.linkedin}
          twitter={mockData.social.twitter}
        />
      </section>
    </main>
  );
}
