//import { useState } from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavMenu from './components/NavMenu';
import Calendario from './components/Calendario';
import Misactividades from './components/Misactividades';
import Comunidad from './components/Comunidad';
import Otros from './components/Otros'
import './App.css';
//import { Button } from "flowbite-react";


function App() {

  return (
    <Router>
      <div>
        <NavMenu />
          
        {/* <Button color="blue" className='px-4 py-2 text-sm'>Blue</Button> */}
        <Routes>
          <Route path="/" element={<Misactividades />} />
          <Route path="/calendario" element={<Calendario />} />
          <Route path="/comunidad" element={<Comunidad />} />
          <Route path="/otros" element={<Otros />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
