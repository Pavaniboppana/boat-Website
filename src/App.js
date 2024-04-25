import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes } from 'react-router-dom'
import Home from './component/Home'
import Gift from './component/Gift'
import Corporate from './component/Corporate'
import Boat from './component/Boat'
import Navigate from './component/Navigate'
function App() {
  return (
 <>
 <Navigate/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/boat' element={<Boat/>}></Route>
      <Route path='/gift' element={<Gift/>}></Route>
      <Route path='/corporate' element={<Corporate/>}></Route>
    </Routes> 
 </>
  );
}

export default App;
