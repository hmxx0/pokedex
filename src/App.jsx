import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import React from 'react'
import Home from './pages/SimpleSlider/Home'
import GuestLayout from './layouts/GuestLayout'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GuestLayout />}>
          <Route index element={<Home />}></Route>
         </Route>
       </Routes>
     </BrowserRouter>
  )
}