import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa6";

export const Header = () => {
  return (
    <header className="w-full flex flex-col justify-center items-center min-h-10">
      <div className="max-w-screen-lg w-full flex justify-between mt-2">
        <div className="flex gap-10">
          <span className="text-indigo-700 font-semibold text-lg">{` < Gabriel />`}</span>
          <nav>
            <ul className="flex gap-8 py-1 px-5">
              <li className="font-medium hover:text-indigo-500 border-b-2 border-transparent hover:border-b-2 hover:border-indigo-500 transition">
                Skils
              </li>
              <li className="font-medium hover:text-indigo-500 hover:border-b-2 border-indigo-500 transition">
                Sobre-min
              </li>
              <li className="font-medium hover:text-indigo-500 hover:border-b-2 border-indigo-500 transition">
                Projetos
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex gap-3 text-2xl pt-2">
          <a href="/" className="hover:text-purple-700"><FaGithub/></a>
          <a href="/" className="hover:text-blue-500" ><FaLinkedin/></a>
          <a href="/" className="hover:text-green-600" ><FaWhatsapp/></a>
        </div>
      </div>
    </header>
  );
};
