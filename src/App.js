import './css/App.css';
import Header from './components/Header';
import SobreMi from './components/SobreMi';
import Servicios from './components/Servicios';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
function App() {

  
  return (
    <div className="App">
        <Header />
        <SobreMi />
        <Servicios />
        <Skills />
        <Portfolio />
        <Contacto />
        <Footer />
    </div>
  );
}

export default App;
