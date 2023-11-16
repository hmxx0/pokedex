import React from 'react'
import { Link, Outlet } from "react-router-dom"

export default function GuestLayout() {
  return (
    <>
      <header className='p-3 flex justify-between items-center bg-black'>
        <span className="text-lg font-semibold text-pink-600">Search
          <img src="" alt="" />
        </span>
        <span className="text-4xl font-semibold text-pink-600">Pokédex
          <img src="" alt="" />
        </span>
        <nav className="flex items-center gap-5">
          <Link to="/">Home</Link>
          
        </nav>
      </header>
      <Outlet />
    </>
  )
}
