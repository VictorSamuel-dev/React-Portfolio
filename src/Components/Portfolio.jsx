import React from 'react'
import PortfolioItem from './PortfolioItem'
import reelRecImg from '../assets/ReelRec-App.png'
import quizTakerImg from '../assets/Quiz-Taker-App.png'
import samplePortfolioImg from '../assets/Sample-Portfolio-App.png'
import weatherAppImg from '../assets/Weather-App.png'

const Portfolio = () => {
  return (
    <div id='portfolio' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Portfolio</h1>
        <p className='text-center py-8'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo, quod ad? Esse aliquid ipsam repellendus harum praesentium perferendis quae, consequuntur, repudiandae molestias maxime, nisi velit inventore iusto? Saepe, earum sequi!
        </p>
        <div className='grid sm:grid-cols-2 gap-12'>
            <PortfolioItem img={reelRecImg} title='ReelRec App' />
            <PortfolioItem img={quizTakerImg} title='Quiz Taker App' />
            <PortfolioItem img={samplePortfolioImg} title='Sample Portfolio App' />
            <PortfolioItem img={weatherAppImg} title='Weather App' />
        </div>
    </div>
  )
}

export default Portfolio