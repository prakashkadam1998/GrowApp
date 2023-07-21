import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import React from 'react'
import Navbar from './component/Navbar'
import SignUp from './component/SignUp';
import { Routes ,Route} from 'react-router-dom';
import LogIn from './component/LogIn'
import Home from './component/Home';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LogIn />} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/home/*' element={<Home/>} />

      </Routes>
    </div>
  )
}
