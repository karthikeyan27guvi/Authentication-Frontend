import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Register from '../src/Register'
import Login from '../src/Login'
import Welcome from './Welcome'

function App() {
  return <>
    <Router>
        <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    </Router>
  </>
}

export default App
