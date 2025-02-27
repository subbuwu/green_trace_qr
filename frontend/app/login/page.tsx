import React from 'react'

type Props = {}

const LoginPage = (props: Props) => {
  return (
    <div className="flex w-full h-screen">
        <div className='w-1/2 flex justify-center items-center h-full border-r border-gray-300 text-3xl flex-col '> 
            For Business
            <button className='text-2xl mt-7 bg-green-500 hover:bg-green-700 transition-all duration-150 ease-in-out px-4 py-2 rounded-full cursor-pointer'>
                Login
            </button>
        </div>
        <div className='w-1/2 flex justify-center items-center h-full flex-col text-3xl'>For User
            <button className='text-2xl mt-7 bg-green-500 hover:bg-green-700 transition-all duration-150 ease-in-out px-4 py-2 rounded-full cursor-pointer'>Login</button>
        </div>
    </div>
  )
}

export default LoginPage