import { FaGithub } from 'react-icons/fa6';
import yey from '../../../../assets/yey.svg';
import { useEffect, useState } from 'react';
import { Titlesections } from '../../../Title/Title.sections';
import { UseDataState } from './type.project';
import { handleDataAddProject } from './Functions/functions.project';
import { ButtonShow } from './components/Buttons/Button.project';


export const Projects = () => {
  const [dataItems, setDataItems] = useState<UseDataState[]>([]);
  const [projects, setProjects] = useState<boolean>(false);

  useEffect(() => {
    handleDataAddProject({ index: 2, setProjects, setDataItems });
  }, []);

  return (
    <section
      className="mb-10 flex flex-col  max-w-screen-lg w-full pt-14"
      id="projetos"
    >
      <Titlesections text="Projetos"/>

      {dataItems.map((item, ind) => {
        return (
          <article key={ind}  className="max-w-5xl  flex-col max-h-80 flex items-center h-full w-full mt-10 bg-gray-50 shadow p-3">
            <div className="flex gap-16">
              {item.lefRigh === 'left' ? (
                <img
                  className="max-w-lg rounded "
                  src={item.url}
                  alt="Project"
                />
              ) : (
                ''
              )}

              <div className="flex flex-col gap-3 items-center">
                <h2 className="text-2xl mb-3">{item.title}</h2>

                <p className="max-w-96 px-5 text-sm text-ellipsis mb-3">
                  {item.description}
                </p>

                <div>
                  <h2 className="font-bold w-full">Tecnologias usadas:</h2>

                  <div className="flex gap-2">
                    {/* tecnologias usada no projeto */}
                    {item.tecnologias.map((tec, i) => {
                      return (
                        <span key={i} className="text-sm font-medium">
                          {tec},
                        </span>
                      );
                    })}
                  </div>
                </div>

                <div className="flex gap-4 mt-4">
                  <a
                    href={item.deploy}
                    target="_blank"
                    className="hover:scale-105 py-1 px-4 transition-all hover:bg-blue-400  bg-white shadow text-black rounded flex gap-2 items-center"
                  >
                    <img src={yey} alt="deploy" className="max-w-6 " />
                    Deploy
                  </a>
                  <a
                    href={item.deploy}
                    target="_blank"
                    className="hover:scale-105 py-1 px-4 transition hover:bg-gray-700 hover:text-white bg-white shadow text-black rounded flex gap-2 items-center"
                  >
                    <span>
                      <FaGithub />
                    </span>
                    GitHub
                  </a>
                </div>
              </div>

              {item.lefRigh === 'right' ? (
                <img className="max-w-lg rounded" src={item.url} alt="as" />
              ) : (
                ''
              )}
            </div>
          </article>
        );
      })}
      <div className="w-full flex justify-center mt-5">
        <ButtonShow setDataItems={setDataItems} projects={projects} setProjects={setProjects}/>
      </div>
    </section>
  );
};
