import logo from './logo.svg';
import './App.css';
import RechercheFilm from './templates/RechercheFilm/RechercheFilm';
import {Route, Routes} from 'react-router-dom';
import Formulaire from './templates/Formulaire/Formulaire';
function App() {
  return (
    <Routes>
            <Route path="/" element={<Formulaire />} />
        </Routes>
 );
}

export default App;
