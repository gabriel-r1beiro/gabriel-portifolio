import { useEffect } from 'react';
import Contact from './components/Contato';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Main } from './components/Main/index';
import './index.css';
import { Events, scrollSpy } from 'react-scroll';

function App() {
  useEffect(() => {
    Events.scrollEvent.register('begin', function () {
      console.log('begin', arguments);
    });

    Events.scrollEvent.register('end', function () {
      console.log('end', arguments);
    });

    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);
  return (
    <div className="bg-gray-100 min-h-screen antialiased">
      <Header />
      <Main />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
