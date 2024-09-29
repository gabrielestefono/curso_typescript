interface Header {
  image: string;
  alt: string;
}

interface TitleInfo {
  title: string;
  description: string;
}

interface ItemsInfo {
  name: string;
  description: string;
}

interface Info {
  title: string;
  items: ItemsInfo[];
}

interface Instruction {
  title: string;
  instruction: string;
}

interface Nutrition {
    name: string;
    quantity: string;
}

interface MockedData {
  header: Header;
  title_info: TitleInfo;
  info: Info;
  ingredients: string[];
  instruction: Instruction[];
  nutrition: Nutrition[];
}
