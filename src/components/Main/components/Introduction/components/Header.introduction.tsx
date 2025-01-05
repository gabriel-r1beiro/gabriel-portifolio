import { FaGithub, FaLinkedin } from "react-icons/fa6";

export const HeaderIntroduction = () => {
  return (
    <header className="flex mt-10 flex-col items-start gap-2 max-w-xl ">
      <div className="">
        <span className="text-xl">Olá, eu sou o</span>
        <h2 className="font-semibold text-3xl">Gabriel Ribeiro</h2>
      </div>
      <span className="font-mono text-xl">Desenvolvedor Full-Stack</span>
      <p className="pr-2">
        Formado em Gestão da Tecnologia da Informação (GTI), tenho um ano de
        experiência em programação, inicialmente focado em automação com Python
        para projetos pessoais. Recentemente, descobri minha paixão pelo
        desenvolvimento web e estou em busca da minha primeira oportunidade
        profissional como desenvolvedor web júnior. Estou ansioso para aplicar
        minhas habilidades e contribuir com projetos desafiadores e inovadores.
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
  );
};
