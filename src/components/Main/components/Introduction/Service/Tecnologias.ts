import { Tecnologias } from "../type.Intro";

import js from '../../../../../assets/tecnologias/js.svg';
import ts from '../../../../../assets/tecnologias/typescript-official.svg';
import git from '../../../../../assets/tecnologias/git.svg';
import nodejs from '../../../../../assets/tecnologias/nodejs.svg';
import mongodb from '../../../../../assets/tecnologias/mongo.svg';
import mysql from '../../../../../assets/tecnologias/mysql.svg';
import nextjs from '../../../../../assets/tecnologias/nextjs.svg';
import react from '../../../../../assets/tecnologias/react.svg';
import tailwindcss from '../../../../../assets/tecnologias/tailwindcss.svg';
import express from '../../../../../assets/tecnologias/express.svg';
import docker from '../../../../../assets/tecnologias/docker.svg';

export const tecnologias: Tecnologias[] = [
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