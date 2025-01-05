import gabriel from '../../../../assets/Gabriel-Linkedin.jpeg';
import { HeaderIntroduction } from './components/Header.introduction';
import {  TecnologiasIntroductions } from './components/Tecnologias';


export const Introduction = () => {
  return (
    <div id="home" className='w-full flex items-center justify-center'>
      <article  className="max-w-screen-lg w-full mt-24">
        
        <div className="flex justify-between">
          <HeaderIntroduction />
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
            <TecnologiasIntroductions/>
          </div>
        </footer>

      </article>
    </div>
  );
};
