import webExemplo from '../../../../../assets/projetos/webexemplo.jpg';

interface Data {
  url: string;
  title: string;
  description: string;
  tecnologias: string[];
  deploy: string;
  github: string;
  lefRigh: string;
}
export const data: Data[] = [
  {
    url: webExemplo,
    title: 'Instagram Clone',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero laboriosam corporis optio eum voluptatum harum!',
    tecnologias: ['Nextjs', 'Nodejs', "Express", "Tailwindcss", "Mongodb"],
    deploy: 'https://www.svgrepo.com/svg/353724/express',
    github: 'https://www.github.com',
    lefRigh: "left",
  },
  {
    url: webExemplo,
    title: 'Instagram Clone',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero laboriosam corporis optio eum voluptatum harum!',
    tecnologias: ['Nextjs', 'Nodejs', "Express", "Tailwindcss", "Mongodb"],
    deploy: 'https://www.svgrepo.com/svg/353724/express',
    github: 'https://www.github.com',
    lefRigh: "right",
  },
];
