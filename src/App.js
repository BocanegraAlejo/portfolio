import './css/App.css';
import Header from './components/Header';
import SobreMi from './components/SobreMi';
import Servicios from './components/Servicios';

function App() {
  return (
    <div className="App">
        <Header />
        <SobreMi />
        <Servicios />
    </div>
  );
}

export default App;
