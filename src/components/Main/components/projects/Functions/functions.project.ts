import { data } from '../Service/data';
import { FunctionsType } from '../type.project';

export const handleDataAddProject = ({
  index,
  setProjects,
  setDataItems,
}: FunctionsType) => {
  const newData = data.filter((_, ind) => ind < index!);

  if (newData.length > 2) {
    setProjects!(false);
  } else {
    setProjects!(true);
  }

  setDataItems!(newData);
};