import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <svg className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h1 className="ml-2 text-xl font-bold text-gray-800">Country Info</h1>
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-4">
              <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-200">Home</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-200">About</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-200">Countries</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-200">Contact</a></li>
            </ul>
          </nav>
          <button 
            className="md:hidden focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>
        {isMenuOpen && (
          <nav className="mt-4 md:hidden">
            <ul className="space-y-2">
              <li><a href="#" className="block text-gray-600 hover:text-gray-800 transition-colors duration-200">Home</a></li>
              <li><a href="#" className="block text-gray-600 hover:text-gray-800 transition-colors duration-200">About</a></li>
              <li><a href="#" className="block text-gray-600 hover:text-gray-800 transition-colors duration-200">Countries</a></li>
              <li><a href="#" className="block text-gray-600 hover:text-gray-800 transition-colors duration-200">Contact</a></li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}