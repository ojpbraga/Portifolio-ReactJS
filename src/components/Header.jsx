import React from 'react'

function Header() {
  return (
    <header className='w-full flex justify-center top-3 fixed z-10'>
        <div className='h-10 bg-slate-800 w-10/12 rounded-[14px] flex justify-between p-2'>
          <p>JP</p>
          <div>menu</div>
        </div>
    </header>
  )
}

export default Header