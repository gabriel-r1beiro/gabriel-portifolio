import { Link } from 'react-scroll';

export const Header = () => {
  return (
    <header className="w-full fixed bg-gray-100 flex flex-col justify-center items-center min-h-10">
      <div className="max-w-screen-lg w-full flex justify-between mt-2">
        <span className="text-indigo-700 font-semibold text-lg">{` < Gabriel />`}</span>
        <nav>
          <ul className="flex gap-8 py-1 px-5">
            <li className={`font-medium transition`}>
              <Link
                spy={true}
                activeClass="active"
                to="home"
                smooth={true}
                duration={600}
              >
                Home
              </Link>
            </li>
            <li className={`font-medium transition`}>
              <Link
                spy={true}
                activeClass="active"
                to="projects"
                smooth={true}
                duration={600}
              >
                Projetos
              </Link>
            </li>
            <li className={`font-medium transition`}>
              <Link
                spy={true}
                activeClass="active"
                to="contact"
                smooth={true}
                duration={600}
              >
                Contato
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
