type TitleProps = { text: string };
export const Titlesections = ({ text }: TitleProps) => {
  return (
    <h2 className="w-full max-w-screen-lg text-2xl text-indigo-600 border-b-2 border-indigo-600">
      {text}
    </h2>
  );
};
