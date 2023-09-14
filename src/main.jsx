import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/landingPage';
import MovieDetails from './pages/movie';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<LandingPage />}/>
        <Route path='/movie/:id' element={<MovieDetails/>} />
      
      </Routes>
    </BrowserRouter>
  </React.StrictMode>


);
