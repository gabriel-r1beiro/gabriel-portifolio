import { tecnologias } from "../Service/Tecnologias";

export const TecnologiasIntroductions = () => {
  return (
    <>
      {tecnologias.map((tec, ind) => {
        return (
          <aside key={ind} className={`rounded-full px-2 py-2 ${tec.color}`}>
            <img className="max-w-12" src={tec.href} alt={tec.alt} />
          </aside>
        );
      })}
    </>
  );
};
