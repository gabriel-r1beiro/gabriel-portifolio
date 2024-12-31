import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa6';

export default function Contact() {
  return (
    <div className="relative w-full mb-8 flex flex-col items-center justify-center">
      <div className="max-w-screen-lg flex items-center justify-center">
        <h1 className="absolute text-8xl text-bold bottom-[23rem] left-[40rem] z-10 text-gray-300">
          Contato
        </h1>
        <div className="flex gap-3 relative z-20 ">
          <a href="/" className="text-7xl text-blue-500">
            <FaLinkedin />
          </a>
          <a href="/" className="text-7xl text-green-700">
            <FaWhatsapp />
          </a>
          <a href="/" className="text-7xl">
            <FaGithub />
          </a>
        </div>
      </div>

      <div className="max-w-screen-lg flex flex-col items-center justify-center bg-gray-50 shadow mt-20">
        <span className='text-gray-500'>Ou mande uma mensagem</span>
        <form className="flex min-h-80 min-w-[30rem] flex-col justify-between px-4 py-6">
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            className="px-2 shadow min-h-9 mb-3"
            placeholder="Digite seu Nome"
          />

          <label htmlFor="email" className='text-gray-800'>Email</label>
          <input
            type="email"
            className="px-2 shadow min-h-9 mb-3"
            placeholder="Digite seu Email"
          />
          {/* <span className='w-full bg-red-600 rounded-sm px-2 text-white font-bold font-mono'>Error</span> */}

          <label htmlFor="msg">Mensagem</label>
          <textarea
            name="comentario"
            id="comentario"
            className="max-w-xl min-h-16 w-full px-2 shadow"
            placeholder="Deixe uma mensagem | Proposta | Critica Construtiva..."
          ></textarea>
          <button className="py-1 px-4 ml-6 mt-3 bg-blue-600 hover:bg-blue-800 text-white rounded max-w-96">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}
