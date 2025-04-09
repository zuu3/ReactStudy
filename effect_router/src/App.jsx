import { useState } from 'react'
import UseEffect1 from './useEffect1'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'

function App() {
  return (
    <>
      <nav>
        <Link to="/">홈</Link> | <Link to="/about">소개</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='*' element={<h1>없는페이지</h1>} />
      </Routes>
    </>
  );
}

export default App
