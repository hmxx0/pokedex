import React from 'react'
import { Link, Outlet } from "react-router-dom"

export default function GuestLayout() {
  return (
    <>
      <header className='p-3 bg-black'>
        <div className='absolute text-4xl left-1/2 font-font-mono'>Pokédex</div>
        <nav className="flex p-3 text-xl">
          <div className='mr-auto'>
            <Link to="/">Home</Link>
          </div>
          <div>
            <Link className='mr-4' to="/all">View All</Link>
          </div>
        </nav>
      </header>
      <Outlet />
    </>
  )
}
