import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home/Home';
import About from './About/About';

const Header = () => {
  return (
    <div>
      <BrowserRouter>
            <Routes>
                <Route path='/' element={< Home />}></Route>
                <Route path='/About' element={<About />}></Route>
            </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Header