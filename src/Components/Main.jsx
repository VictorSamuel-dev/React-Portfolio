import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
// import './public/assets'

const Main = () => {
    return (
        <div id='main'>
            <img className='w-full h-screen object-cover object-right scale-x-[1]' src='../assets/Main-Photo-2.JPG'></img>
            <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
                <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
                    <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>Victor Samuel</h1>
                    <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'> I'm a
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'Developer',
                                2000, // wait 1s before replacing "Mice" with "Hamsters"
                                'Coder',
                                2000,
                                'Tech Enthusiast',
                                2000, 
                            ]}
                            wrapper="div"
                            cursor={true}
                            style={{ fontSize: '1em', paddingLeft: '5px' }}
                            repeat={Infinity}
                        />

                    </h2>
                    <div className='flex justify-between pt-6 max-w-[200px] w-full'>
                        <a href="https://www.linkedin.com/in/victor-c-samuel/"><FaLinkedinIn src='' className='cursor-pointer' size={20} /></a>
                        <a href="https://github.com/VictorSamuel-dev"><FaGithub className='cursor-pointer' size={20} /></a>
                        <a href="https://twitter.com/victorcsamuel"><FaTwitter className='cursor-pointer' size={20} /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main