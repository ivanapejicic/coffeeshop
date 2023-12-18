import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './assets/pages/Home/Home';
import Menu from './assets/pages/Menu/Menu';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path= '' element={<Home />} />
          <Route path= '/menu' element={<Menu /> } />
        </Routes>      
      </BrowserRouter>
    </div>
  );
}

export default App;
