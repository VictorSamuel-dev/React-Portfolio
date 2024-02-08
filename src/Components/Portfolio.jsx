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
            This project overview showcases my skill set and contributions, emphasizing my commitment to continual growth and the application and enhancement of my skills.
        </p>
        <div className='grid sm:grid-cols-2 gap-12'>
            <PortfolioItem img={reelRecImg} title='ReelRec App' githubLink='https://github.com/VictorSamuel-dev/ReelRecs' liveLink='https://victorsamuel-dev.github.io/ReelRecs/'/>
            <PortfolioItem img={quizTakerImg} title='Quiz Taker App' githubLink='https://github.com/VictorSamuel-dev/Coding_Quiz' liveLink='https://victorsamuel-dev.github.io/Coding_Quiz/'/>
            <PortfolioItem img={samplePortfolioImg} title='Portfolio App' githubLink='https://github.com/VictorSamuel-dev/My_Portfolio' liveLink='https://victorsamuel-dev.github.io/My_Portfolio/' />
            <PortfolioItem img={weatherAppImg} title='Weather App' githubLink='https://github.com/VictorSamuel-dev/Weather-Forecast' liveLink='https://victorsamuel-dev.github.io/Weather-Forecast/' />
        </div>
    </div>
  )
}

export default Portfolio