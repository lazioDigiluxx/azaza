import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Page/Home/Home';
import AboutUs from './Page/AboutUs/AboutUs';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/About' element={<AboutUs/>}/>
            </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
