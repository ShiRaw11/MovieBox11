import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/landingPage';
import MovieDetails from './pages/movie';
import ErrorHandler from './pages/error';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
      <Route path='/MovieBox11' element={<LandingPage />}/>
      <Route path='/MovieBox11/error/feature' element={<ErrorHandler />}/>
        <Route path='/MovieBox11/:id' element={<MovieDetails/>} />
      
      </Routes>
    </BrowserRouter>
  </React.StrictMode>


);
