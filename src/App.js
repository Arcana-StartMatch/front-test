import logo from './logo.svg';
import './App.css';
import Caroussel from "./Atoms/Caroussel";
import {Route, Routes} from 'react-router-dom';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Caroussel />} />
        </Routes>
    );
}

export default App;
