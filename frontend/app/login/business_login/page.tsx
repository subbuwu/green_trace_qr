import React from 'react'

type Props = {}

const BusinessLoginPage = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl mb-8">Business Login</h1>
      <form className="w-full max-w-md p-6 bg-white rounded-lg shadow-2xl">
        <div className="mb-4">
          <label className="block text-black text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" 
            id="email" 
            type="email" 
            placeholder="Email"
          />
        </div>
        <div className="mb-6">
          <label className="block text-black text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-black mb-3 leading-tight focus:outline-none focus:shadow-outline" 
            id="password" 
            type="password" 
            placeholder="******************"
          />
        </div>
        <div className="flex items-center justify-between">
          <button 
            className="bg-green-500 hover:bg-green-700 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-all duration-150 ease-in-out" 
            type="button"
          >
            Sign In
          </button>
          <a className="inline-block align-baseline font-bold text-sm text-green-500 hover:text-green-800" href="#">
            Forgot Password?
          </a>
          <a className="inline-block align-baseline font-bold text-sm text-green-500 hover:text-green-800" href="#">
            New User? Sign Up
          </a>
        </div>
      </form>
    </div>
  )
}

export default BusinessLoginPage