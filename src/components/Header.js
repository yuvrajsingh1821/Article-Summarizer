import React from 'react'
import Logo from "../assets/logo.png"

const Header = () => {
  return (
    <div className='px-4 flex justify-between max-w-[1100px] mx-auto pt-6'>
       
       {/*logo*/}
       <img src={Logo} alt="" className='bg-white w-12 md:w-14 rounded-[50%]'/>
       
       {/*github button */}
       <button className='bg-gradient-to-r from-white via-slate-200 to-gray-500 px-3 text-lg md:text-xl font-medium rounded-2xl h-10' onClick={() => window.open('https://github.com/yuvrajsingh1821/Article-Summarizer')}>Github</button>
    </div>
  )
}

export default Header