"use client"
import React from 'react'
import { useRouter } from 'next/navigation'

type Props = {}

const LoginPage = (props: Props) => {
  const router = useRouter()

  const handleBusinessLogin = () => {
    router.push('/login/business_login')
  }

  const handleUserLogin = () => {
    router.push('/login/user_login')
  }

  return (
    <div className="flex w-full h-screen">
        <div 
          className='w-1/2 flex justify-center items-center h-full border-r border-gray-300 text-3xl flex-col' 
          style={{ backgroundImage: 'url(/bg_busi_login.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div className="w-full max-w-md p-6 bg-white/50 backdrop-blur-md rounded-lg shadow-2xl flex flex-col items-center">
            <div className="mb-4 font-semibold">For Business</div>
            <button 
                onClick={handleBusinessLogin}
                className='text-2xl mt-7 bg-green-500 hover:bg-green-700 transition-all duration-150 ease-in-out px-4 py-2 rounded-full cursor-pointer '
            >
                Login
            </button>       
          </div>    
        </div>
        <div 
          className='w-1/2 flex justify-center items-center h-full flex-col text-3xl'
          style={{ backgroundImage: 'url(/bg_user_login.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className="w-full max-w-md p-6 bg-white/50 backdrop-blur-md rounded-lg shadow-2xl flex flex-col items-center">
                <div className="mb-4 font-semibold">For User</div>
                <button 
                    onClick={handleUserLogin}
                    className='text-2xl mt-7 bg-green-500 hover:bg-green-700 transition-all duration-150 ease-in-out px-4 py-2 rounded-full cursor-pointer'
                >
                  Login
                </button>
            </div>
        </div>
    </div>
  )
}

export default LoginPage
