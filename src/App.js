import logo from './logo.svg';
import './App.css';
import RechercheFilm from './templates/RechercheFilm/RechercheFilm';
import {Route, Routes} from 'react-router-dom';
function App() {
  return (
    <Routes>
            <Route path="/" element={<RechercheFilm />} />
        </Routes>
 );
}

export default App;
