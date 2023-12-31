import React from 'react'
import { Link, Outlet } from "react-router-dom"
export default function GuestLayout() {
  return (
    <>
      <header className='p-6 bg-gradient-to-r from-pink-600 to-rose-700'>
        <div className='absolute text-center right-96 left-96 text-8xl top-0  font-font-mono animate-pulse transition-shadow text-yellow-500 font-bold'>Pokédex</div>
        <nav className="flex p-2 text-xl">
          <div className='mr-auto mr-4 transition ease-in-out delay-150 bg-zinc-800 hover:-translate-y-1 hover:scale-110 hover:bg-teal-600 duration-300 rounded-md p-2'>
            <Link to="/">Home</Link>
          </div>
          <div>
            <Link className='mr-4 transition ease-in-out delay-150 bg-zinc-800 hover:-translate-y-1 hover:scale-110 hover:bg-teal-600 duration-300 rounded-md p-2' to="/all">View All</Link>
          </div>
        </nav>
      </header>
      <Outlet />
    </>
  )
}
