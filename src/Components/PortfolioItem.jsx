import React from 'react'

const PortfolioItem = ({img, title, githubLink, liveLink}) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e]'>
        <img src={img} alt="/" className='rounded-xl group-hover:opacity-10' />
        <div className='hidden group-hover:block absolute to-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
            <h3 className='text-2xl font-bold text-white tracking-wider text-center'>
                {title}
            </h3>
            <p className=' text-white text-center'></p>
            <a href={liveLink}>
                <p className='text-center mt-1.5 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg'>Depolyed</p>
            </a>
            <a href={githubLink}>
              <p className='text-center mt-1.5 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg'>GitHub</p>
            </a>   
        </div>
    </div>
  )
}

export default PortfolioItem