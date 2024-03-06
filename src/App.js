
import './App.css';
import RechercheFilm from './templates/RechercheFilm/RechercheFilm';
import {Route, Routes} from 'react-router-dom';
import Formulaire from './templates/Formulaire/Formulaire';
function App() {
  return (
    <Routes>
            <Route path="/test" element={<Formulaire />} />
            <Route path="/" element={<RechercheFilm />} />
        </Routes>
 );
}

export default App;
