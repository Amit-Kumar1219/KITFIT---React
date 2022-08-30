import './App.css';
import React from 'react'
import {Box} from "@mui/material";
import {Routes, Route} from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ExerciseDetails from './pages/ExerciseDetails';

const App = () => {
  return (
    <Box width="400px" sx={{width : {xl:'1488px'}}} m="auto">
        <Navbar />
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/exercise/:id" element={<ExerciseDetails/>} />
        </Routes>
        <Footer />
    </Box>
  )
}

export default App