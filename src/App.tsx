import Contact from './components/Contato';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Main } from './components/Main/index';
import './index.css';

function App() {
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
