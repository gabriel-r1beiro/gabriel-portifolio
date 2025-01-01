import gabriel from '../../../../assets/Gabriel-Linkedin.jpeg';
import js from '../../../../assets/tecnologias/js.svg';
import ts from '../../../../assets/tecnologias/typescript-official.svg';
import git from '../../../../assets/tecnologias/git.svg';
import nodejs from '../../../../assets/tecnologias/nodejs.svg';
import mongodb from '../../../../assets/tecnologias/mongo.svg';
import mysql from '../../../../assets/tecnologias/mysql.svg';
import nextjs from '../../../../assets/tecnologias/nextjs.svg';
import react from '../../../../assets/tecnologias/react.svg';
import tailwindcss from '../../../../assets/tecnologias/tailwindcss.svg';
import express from '../../../../assets/tecnologias/express.svg';
import docker from '../../../../assets/tecnologias/docker.svg';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';

interface Tecnologias {
  href: string;
  alt: string;
  color?: string;
}

export const Introduction = () => {
  const tecnologias: Tecnologias[] = [
    {
      href: js,
      alt: 'JavaScript',
      color: 'bg-yellow-100',
    },
    {
      href: ts,
      alt: 'TypeScript',
      color: 'bg-blue-100',
    },
    {
      href: nextjs,
      alt: 'NextJs',
      color: 'bg-white',
    },
    {
      href: react,
      alt: 'Reactjs',
      color: 'bg-cyan-50',
    },
    {
      href: nodejs,
      alt: 'Nodejs',
      color: 'bg-green-100',
    },
    {
      href: express,
      alt: 'Express js',
      color: 'bg-white',
    },
    {
      href: tailwindcss,
      alt: 'Tailwindcss',
      color: 'bg-cyan-50',
    },

    {
      href: git,
      alt: 'Git',
      color: 'bg-red-100',
    },
    {
      href: mongodb,
      alt: 'MongoDB',
      color: 'bg-green-100',
    },
    {
      href: docker,
      alt: 'Docker',
      color: 'bg-blue-100',
    },
    {
      href: mysql,
      alt: 'MySql',
      color: 'bg-white',
    },
  ];
  return (
    <div id="home" className='w-full flex items-center justify-center'>
      <article  className="max-w-screen-lg w-full mt-24">
        <div className="flex justify-between">
          <header className="flex mt-10 flex-col items-start gap-2 max-w-xl ">
            <div className="">
              <span className="text-xl">Olá, eu sou o</span>
              <h2 className="font-semibold text-2xl">Gabriel Ribeiro</h2>
            </div>
            <span className="font-mono text-xl">Desenvolvedor Full-Stack</span>
            <p className="pr-2">
              Formado em Gestão da Tecnologia da Informação (GTI), tenho um ano
              de experiência em programação, inicialmente focado em automação
              com Python para projetos pessoais. Recentemente, descobri minha
              paixão pelo desenvolvimento web e estou em busca da minha primeira
              oportunidade profissional como desenvolvedor web júnior. Estou
              ansioso para aplicar minhas habilidades e contribuir com projetos
              desafiadores e inovadores.
            </p>
            <div className="flex gap-4">
              <a
                className="hover:scale-105 flex gap-2 items-center mt-3 bg-black hover:bg-gray-700 text-white py-2 px-7 rounded-sm"
                href="https://github.com/gabriel-r1beiro"
                target="_blank"
              >
                <FaGithub /> GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/gabriel-ribe1ro/"
                target="_blank"
                className="hover:scale-105 flex gap-2 items-center mt-3 bg-blue-700 hover:bg-blue-900 text-white py-2 px-6 rounded-sm"
              >
                <FaLinkedin /> Linkedin
              </a>
            </div>
          </header>
          <div>
            <img
              className="max-w-96 rounded-full border px-10 border-indigo-500"
              src={gabriel}
              alt="Gabriel Ribeiro"
            />
          </div>
        </div>
        <footer className="my-20">
          <h2 className="text-gray-600 mb-4">Minha stack de tecnologias</h2>
          <div className="flex items-center justify-center gap-4">
            {tecnologias.map((tec, ind) => {
              return (
                <aside
                  key={ind}
                  className={`rounded-full px-2 py-2 ${tec.color}`}
                >
                  <img className="max-w-12" src={tec.href} alt={tec.alt} />
                </aside>
              );
            })}
          </div>
        </footer>
      </article>
    </div>
  );
};
