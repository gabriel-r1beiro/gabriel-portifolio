import { LinksHeader } from './components/Links.header';
import { TitleHeader } from './components/Title.Header';

export const Header = () => {
  return (
    <header className="w-full fixed z-50 shadow bg-gray-100 flex flex-col justify-center items-center min-h-10">
      <div className="max-w-screen-lg w-full flex justify-between mt-2">
        <TitleHeader />

        <nav>
          <ul className="flex gap-8 py-1 px-5">
            <LinksHeader />
          </ul>
        </nav>
      </div>
    </header>
  );
};
