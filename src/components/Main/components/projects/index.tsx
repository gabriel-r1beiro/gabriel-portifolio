import { FaGithub } from 'react-icons/fa6';
import { data } from './components/data';
import yey from '../../../../assets/yey.svg';

export const Projects = () => {
  return (
    <section className="flex flex-col h-screen">
      <h2 className="text-2xl text-indigo-600 border-b-2 border-indigo-600">
        Projetos
      </h2>

      {data.map((item, ind) => {
        return (
          <article className="max-w-5xl flex-col gap-20 max-h-80 flex items-center h-full w-full mt-10 bg-gray-50 shadow p-3">
            <div key={ind} className="flex gap-3">
              {item.lefRigh === 'left' ? (
                <img className="max-w-lg rounded" src={item.url} alt="as" />
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
                    className="py-1 px-4 transition-all hover:bg-blue-400  bg-white shadow text-black rounded flex gap-2 items-center"
                  >
                    <img src={yey} alt="deploy" className="max-w-6" />
                    Deploy
                  </a>
                  <a
                    href={item.deploy}
                    target="_blank"
                    className="py-1 px-4 transition hover:bg-gray-700 hover:text-white bg-white shadow text-black rounded flex gap-2 items-center"
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
    </section>
  );
};
