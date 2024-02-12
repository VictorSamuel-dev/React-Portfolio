import { useState } from 'react'
import viteLogo from '/vite.svg'
import './index.css'
import Sidenav from './Components/Sidenav'
import Main from './Components/Main'
import Work from './Components/Work'
import Portfolio from './Components/Portfolio'
import Contact from './Components/Contact'
import About from './Components/About'
import Footer from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Sidenav />
      <Main />
      <About />
      <Work />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
