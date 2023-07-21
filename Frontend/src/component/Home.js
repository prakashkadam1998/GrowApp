import React, {useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Main from './Main';
import FullProfile from './FullProfile';
import Activity from './Activity';

export default function Home() {
  const [isUser, setIsUser] = useState('');
  const navigate = useNavigate();
    useEffect(() => {
        setIsUser(localStorage.getItem("name"))
    }, [])
  return (
    <div>{
      <div>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Main></Main>} />
          <Route path='/profile' element={<FullProfile/>} />
          <Route path='/recent-activity' element={<Activity/>} />
        
        </Routes>
        
      </div>
      }
    </div>
  )
}
