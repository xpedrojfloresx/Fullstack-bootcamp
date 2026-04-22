//import { useState } from 'react'
import './App.css'
import BarraNav from './components/Barranav.jsx'
import Home from './pages/Home/Home.jsx'
import {Routes, Route} from "react-router-dom"



export default function App() {
  return (
    <>
      <BarraNav />
      
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}


