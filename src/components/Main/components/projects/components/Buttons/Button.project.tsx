import { handleDataAddProject } from '../../Functions/functions.project';
import { UseDataState } from '../../type.project';

interface ButtonShowProps {
  projects: boolean;
  setProjects: React.Dispatch<React.SetStateAction<boolean>>;
  setDataItems: React.Dispatch<React.SetStateAction<UseDataState[]>>;
}

export const ButtonShow = ({
  projects,
  setProjects,
  setDataItems,
}: ButtonShowProps) => {
  const handleDataMostraMenos = () => {
    handleDataAddProject({ index: 2, setProjects, setDataItems });
    setProjects(true);
  };

  return (
    <>
      {projects ? (
        <button
          onClick={() =>
            handleDataAddProject({ index: 4, setProjects, setDataItems })
          }
          className="bg-blue-600 hover:bg-blue-700 transition-all px-7 py-1 hover:shadow-t hover:shadow-blue-300 text-white rounded-full "
        >
          Mostra Mais
        </button>
      ) : (
        <button
          onClick={handleDataMostraMenos}
          className="bg-blue-600 hover:bg-blue-700 transition-all px-7 py-1 hover:shadow-t hover:shadow-blue-300 text-white rounded-full "
        >
          Mostra Menos
        </button>
      )}
    </>
  );
};
