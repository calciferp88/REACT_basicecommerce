import React from 'react';
import Home from './Pages/home';
import { Routes, Route } from 'react-router-dom';
import Pagenotfound from './Components/pagenotfound';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/*' element={<Pagenotfound />} />
      </Routes>
    </>
  );
}

export default App;
