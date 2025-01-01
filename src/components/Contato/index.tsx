import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa6';

export default function Contact() {
  return (
    <div id='contact' className='h-screen flex items-center justify-center'>
      <div
        className="relative w-full mb-8 flex flex-col items-center justify-center"
      >
        <div className="max-w-screen-lg flex items-center justify-center">
          <h1 className="absolute text-8xl text-bold bottom-[24rem] left-[40rem] z-10 text-gray-300">
            Contato
          </h1>
          <div className="flex gap-3 relative z-20 ">
            <a
              href="https://www.linkedin.com/in/gabriel-ribe1ro/"
              target="_blank"
              className="text-7xl text-blue-500"
            >
              <FaLinkedin />
            </a>
            <a
              href="http://wa.me/553899229597"
              className="text-7xl text-green-700"
              target="_blank"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://github.com/gabriel-r1beiro"
              className="text-7xl"
              target="_blank"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        <div className="max-w-screen-lg flex flex-col items-center justify-center bg-gray-50 shadow mt-20">
          <span className="text-gray-500 pt-3">Ou mande uma mensagem</span>
          <form className="flex min-h-80 min-w-[30rem] flex-col justify-between px-4 py-6">
            <label htmlFor="nome">Nome</label>
            <input
              type="text"
              className="px-2 shadow min-h-9 mb-3 focus:outline-blue-700"
              placeholder="Digite seu Nome"
            />

            <label htmlFor="email" className="text-gray-800">
              Email
            </label>
            <input
              type="email"
              className="px-2 shadow min-h-9 mb-3 focus:outline-blue-700"
              placeholder="Digite seu Email"
            />
            {/* <span className='w-full bg-red-600 rounded-sm px-2 text-white font-bold font-mono'>Error</span> */}

            <label htmlFor="msg">Mensagem</label>
            <textarea
              name="comentario"
              id="comentario"
              className="max-w-xl min-h-16 w-full px-2 shadow focus:outline-blue-700"
              placeholder="Deixe uma mensagem | Proposta | Critica Construtiva..."
            ></textarea>
            <button className="py-1 px-4 ml-6 mt-3 bg-blue-600 hover:bg-blue-800 text-white rounded max-w-96">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
