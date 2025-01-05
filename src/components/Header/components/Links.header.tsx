import { Link } from 'react-scroll';

export const LinksHeader = () => {
  const data = ['Home', 'Projetos', 'Contato'];
  return (
    <>
      {data.map((item, index) => {
        return (
          <li key={index} className={`font-medium transition`}>
            <Link
              spy={true}
              activeClass="active"
              to={item.toLowerCase()}
              smooth={true}
              duration={600}
            >
              {item}
            </Link>
          </li>
        );
      })}
    </>
  );
};
