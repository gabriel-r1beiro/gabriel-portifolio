import { MensageForm, mensageSchema } from './Schema.form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

export const FormContato = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MensageForm>({ resolver: zodResolver(mensageSchema) });

  const onSubmit = (data: MensageForm) => {
    const { name, email, mensage } = data;
    console.log(name, email,mensage);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex min-h-80 min-w-[30rem] flex-col justify-between px-4 py-6"
    >
      <label htmlFor="email" className="text-gray-800">
        Email
      </label>
      <input
        type="email"
        className="px-2 shadow min-h-9 mb-3 focus:outline-blue-700"
        placeholder="Digite seu Email"
        {...register('email')}
      />
      {errors.email && (
        <span className="w-full bg-red-600 rounded-sm px-2 text-white font-bold font-mono">
          {errors.email.message}
        </span>
      )}

      <label htmlFor="nome">Nome</label>
      <input
        type="text"
        className="px-2 shadow min-h-9 mb-3 focus:outline-blue-700"
        placeholder="Digite seu Nome"
        {...register('name')}
      />
      {errors.name && (
        <span className="w-full bg-red-600 rounded-sm px-2 text-white font-bold font-mono">
          {errors.name.message}
        </span>
      )}
      

      <label htmlFor="msg">Mensagem</label>
      <textarea
        id="comentario"
        className="max-w-xl max-h-72 min-h-24 w-full px-3 py-1 shadow focus:outline-blue-700"
        placeholder="Deixe uma mensagem | Proposta | Critica Construtiva..."
        {...register('mensage')}
      ></textarea>
      {errors.mensage && (
        <span className="w-full bg-red-600 rounded-sm px-2 text-white font-bold font-mono">
          {errors.mensage.message}
        </span>
      )}
      <button type='submit' className="py-1 px-4 ml-6 mt-3 bg-blue-600 hover:bg-blue-800 text-white rounded max-w-96">
        Enviar
      </button>
    </form>
  );
};
