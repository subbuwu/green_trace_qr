import React from 'react'
import { Leaf } from 'lucide-react'



export const Navbar = () => {
  return (
      <header className="border-b border-b-gray-300 bg-white relative py-4 px-6 pl-2 flex items-center">
        <div className="flex items-center justify-center flex-1 ">

          <h1 className="text-3xl md:text-5xl font-extrabold text-black tracking-tight flex items-center justify-center gap-0.5">
          <Leaf className="h-10 w-10 text-green-900" /> Green<span className="text-green-400">Trace</span>
          </h1>

          
        </div>
        
        {/* <nav className="hidden md:flex space-x-8">
          <a href="#" className="text-sm font-medium">Products</a>
          <a href="#" className="text-sm font-medium">Solutions</a>
          <a href="#" className="text-sm font-medium">Resources</a>
          <a href="#" className="text-sm font-medium">Pricing</a>
          <a href="#" className="text-sm font-medium">For Developers</a>
        </nav> */}
        
        <div className="flex items-center space-x-4">
          {/* <Button variant="ghost" size="sm">Log In</Button>
          <Button variant="outline" size="sm">Request Demo</Button>
          <Button variant="default" className="bg-green-600 hover:bg-green-700" size="sm">Create a free account</Button> */}

        </div>
      </header>

  )
}