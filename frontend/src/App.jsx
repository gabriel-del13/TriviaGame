import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CategorySelect from './pages/CategorySelect';
import Game from './pages/Game';
import Results from './pages/Results';
import Admin from './pages/Admin';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/select-category/:mode" element={<CategorySelect />} />
        <Route path="/game/:mode/:categoryId/:questionLimit?/:difficulty?" element={<Game />} />
        <Route path="/results" element={<Results />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;