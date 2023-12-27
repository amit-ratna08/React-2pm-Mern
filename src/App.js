import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './Navbar'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
         <Routes>
            <Route path='/' element={<h1>HOME PAGE</h1>} />
            <Route path='/about' element={<h1>ABOUT PAGE</h1>} />
            <Route path='/contect' element={<h1>CONTECT PAGE</h1>} />
         </Routes>
      </BrowserRouter>
    </div>
  )
}


export default App
