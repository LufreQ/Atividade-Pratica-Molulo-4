import react from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/pages/Home';
import Contato from './components/pages/Contato';
import Destinos from './components/pages/Destinos';
import Promocoes from './components/pages/Promocoes';
import Conf from './components/pages/conf';
import Done from './components/pages/Done';

const App = () => {
  return(
    
    <Router>
      <Navbar />
     
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>

      <Routes>
        <Route path='/contato' element={<Contato />}/>
      </Routes>

      <Routes>
        <Route path='/destinos' element={<Destinos />}/>
      </Routes>

      <Routes>
        <Route path='/promocoes' element={<Promocoes />}/>
      </Routes>

      <Routes>
        <Route path='/Conf' element={<Conf />}/>
      </Routes>

      <Routes>
        <Route path='/Done' element={<Done />}/>
      </Routes>
    
    </Router>






  )
}

export default App;
