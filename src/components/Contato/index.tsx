import { Titlesections } from '../Title/Title.sections';
import { FormContato } from './Form.Contato';
import { LinksContato } from './components/Links.Contato';

export default function Contact() {
  return (
    <div id="contato" className="h-screen flex items-center justify-center">
      <div className="relative w-full flex flex-col items-center justify-center">
        <Titlesections text="Contato"/>
        
        <div className="max-w-screen-lg mt-5 flex items-center justify-center relative overflow-hidden">
          <div className="flex gap-3 z-20 ">
            <LinksContato />
          </div>
        </div>

        <div className="max-w-screen-lg flex flex-col items-center justify-center bg-gray-50 shadow mt-20">
          <span className="text-gray-500 pt-3">Ou mande uma mensagem</span>
          <FormContato />
        </div>
      </div>
    </div>
  );
}
