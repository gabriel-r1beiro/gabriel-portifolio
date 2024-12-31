import { Introduction } from "./components/Introduction/introduction";
import { Projects } from "./components/projects";

export const Main = () => {
  return (
    <main className="w-full flex flex-col gap-20 items-center justify-center">
      <Introduction />
      <Projects />
    </main>
  );
};
