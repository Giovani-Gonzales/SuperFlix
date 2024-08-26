import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Login from './components/Login'
import Register from './components/Register'
import Dashboard from './components/Dashboard'
import Home from './pages/Home'
import NotFound from './pages/Home'

import ProtectedRoute from './components/ProtectedRoute';

function App() {

  return <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login/>} /> 
      <Route index path='/' element={<Home/>}/> 
      <Route path='/register' element={<Register/>}/> 
      <Route path='/dashboard' element={<ProtectedRoute element={Dashboard}/>}/> 
      <Route element={<NotFound/>}/> 
    </Routes>
  </BrowserRouter>
}

export default App
