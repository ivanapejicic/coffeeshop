import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './assets/pages/Home/Home';
import Menu from './assets/pages/Menu/Menu';
import Contact from './assets/pages/Contact/Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path= '' element={<Home />} />
          <Route path= '/menu' element={<Menu /> } />
          <Route path= '/contact' element={<Contact /> } />

        </Routes>      
      </BrowserRouter>
    </div>
  );
}

export default App;
