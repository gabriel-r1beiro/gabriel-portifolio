export interface UseDataState {
  url: string;
  title: string;
  description: string;
  tecnologias: string[];
  deploy: string;
  github: string;
  lefRigh: string;
}

export interface FunctionsType {
  index?: number;
  setProjects?: React.Dispatch<React.SetStateAction<boolean>>;
  setDataItems?: React.Dispatch<React.SetStateAction<UseDataState[]>>;
}
