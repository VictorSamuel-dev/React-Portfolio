import React from 'react'

function Header() {
    const menuList=[
        {
            id:1,
            title:'Home'
        },
        {
            id:1,
            title:'About'
        },
        {
            id:1,
            title:'Portfolio'
        },
        {
            id:1,
            title:'Contact'
        },
        {
            id:1,
            title:'Resume'
        },
    ]
  return (
    <div>
        <div>
            <h2 className='text-[24px] font-bold text-white'>VICTOR 
            <span className='text-red-500'> SAMUEL</span></h2>
        </div>
        <div>
            
        </div>
    </div>
  )
}

export default Header