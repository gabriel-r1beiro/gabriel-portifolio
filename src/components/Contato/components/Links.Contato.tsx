import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa6';

export const LinksContato = () => {
  const links = [
    {
      href: 'https://www.linkedin.com/in/gabriel-ribe1ro/',
      icon: <FaLinkedin />,
      color: 'text-blue-500',
    },
    {
      href: 'http://wa.me/553899229597',
      icon: <FaWhatsapp />,
      color: 'text-green-700',
    },
    {
      href: 'https://github.com/gabriel-r1beiro',
      icon: <FaGithub />,
      color: 'text-black',
    },
  ];
  return (
    <>
      {links.map((link, index) => {
        return (
          <a
            key={index}
            href={link.href}
            target="_blank"
            className={`text-7xl ${link.color}`}
          >
            {link.icon}
          </a>
        );
      })}
    </>
  );
};
