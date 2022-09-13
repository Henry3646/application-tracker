import React from 'react'
import './components/Styles/App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home.js'
import Auth from './components/Auth/Auth.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


const App = () => {
  return (
    <BrowserRouter>
      <div className='app__app app__flex'>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/auth" exact element={<Auth />} />
        </Routes>
        
      </div>
    </BrowserRouter>
  )
}

export default App