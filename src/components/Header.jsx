import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='bg-white flex justify-around py-6 shadow-md'>
        <div>
            <h1 className='font-bold text-[20px]'>KaReEm</h1>
        </div>

        <div className='flex '>
            <Link to="/" className='mx-4 font-semibold hover:text-red-600'>Home</Link>
            <Link to="/about" className='mx-4 font-semibold hover:text-red-600'>About</Link>
            <Link to="/projects" className='mx-4 font-semibold hover:text-red-600'>Projects</Link>
            <Link to="/skills" className='mx-4 font-semibold hover:text-red-600'>Skills</Link>
            <Link to="/contact" className='mx-4 font-semibold hover:text-red-600'>Contact</Link>
        </div>
    </div>
  )
}
