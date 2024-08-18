import React from 'react'

function Header() {
  return (
    <header className='w-full flex justify-center top-[4vh] fixed z-10'>
        <div className='h-10 bg-[#1b778b]/65 w-10/12 rounded-[14px] flex justify-between items-center px-4'>
          <p className="font-monoton text-white">JP</p>
          <div>menu</div>
        </div>
    </header>
  )
}

export default Header