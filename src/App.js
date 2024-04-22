// App.js
import React, { useState } from 'react';
import './App.css';
import Complaintform from './pages/complaintform';
import Header from './components/header';
import { Route, Routes } from "react-router-dom"
import Home from './pages/home';
import Viewcomplaint from './pages/viewcomplaint';
import About from './pages/about';
import Complaintdetail from './pages/complaintdetail';
function App() {
  

  return (
    <div className='bg-transparent h-[200vh]'>
      <div className='bg-black h-full min-h-[100vh] z-[-20]'></div>
      <div  className=' h-full mt-[-200vh] min-h-[100vh] z-[-10]' style={{
          backgroundImage:
          "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
          backgroundRepeat: "repeat",
          backgroundSize: "cover",
          opacity: 0.5,
      }}>
      </div>
        <Header/>
        <div className='flex h-fit w-fit relative z-20' >
          {/* <Sidebar className=''/> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/complaintform" element={<Complaintform className='p-5'/>} />
            <Route path="/viewcomplaint" element={<Viewcomplaint className='p-5'/>} />
            <Route path="/complaintdetail/:id" element={<Complaintdetail className='p-5'/>} />
            <Route path="/about" element={<About className='p-5'/>} />
          </Routes>
          
        </div>
      </div>
    // </div>
  );
}

export default App;
