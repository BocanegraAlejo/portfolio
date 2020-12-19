import './css/App.css';
import Header from './components/Header';
import SobreMi from './components/SobreMi';
import Servicios from './components/Servicios';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
        <Header />
        <SobreMi />
        <Servicios />
        <Skills />
    </div>
  );
}

export default App;
