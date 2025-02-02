import React from 'react'
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
/*Js*/
import Home from './components/Home'
import Courses from './components/Courses'
import Contact from './components/Contact'
import Biblioteca from './components/Biblioteca'
import Viaje from './components/Trip'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div>
    <Router>
      <section className='App' style={{backgroundColor: '#003478'}} >
        <Header style={{ margin: 0, padding: 0}}  />

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/biblioteca" element={<Biblioteca />} />
          <Route path="/trip" element={<Viaje />} />
          { }
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
        <Footer />
        
      </section> 

    </Router>
    </div>
  )
}

export default App
