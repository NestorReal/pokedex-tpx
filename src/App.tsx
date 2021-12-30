import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Pokedex  from './features/pokemon/App';
import PokemonDetails  from './features/pokemon/PokemonDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Pokedex/>} />
        <Route path='/:pokemon' element={<PokemonDetails />} />
      </Routes>
    </Router>
  );
}

export default App;