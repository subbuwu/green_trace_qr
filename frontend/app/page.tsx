"use client"
import { useRouter } from "next/navigation";

export default function Home() {
  const router=useRouter()
  function handleClick(){
    router.push("login")
  }
  return (
    <div className="flex flex-col justify-center h-screen items-center"
    style={{backgroundImage:'url(/bg1_image.jpg)',backgroundSize:'cover', backgroundPosition: 'center'}}>
      <div className="text-6xl mb-4">
        GreenTrace
      </div>
      <div className="text-4xl">
        Let's recycle for a better future
      </div>
      <button className="text-2xl mt-7 bg-green-500 hover:bg-green-700 transition-all duration-150 ease-in-out px-4 py-2 rounded-full cursor-pointer" onClick={handleClick}>
        Login
      </button>
    </div>
  );
}