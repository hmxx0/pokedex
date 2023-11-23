import React from 'react'
import { Link, Outlet } from "react-router-dom"

export default function GuestLayout() {
  return (
    <>
      <header className='p-3 bg-black'>
        <nav className="flex p-3 text-xl">
          <div className='mr-auto'>
            <Link to="/">Home</Link>
          </div>
          <div>
            <Link className='mr-8' to="/all">View All</Link>
            <Link className='mr-4' to="/search">Search</Link>
          </div>
        </nav>
      </header>
      <Outlet />
    </>
  )
}
