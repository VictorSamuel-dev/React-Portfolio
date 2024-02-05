import { useState } from 'react'
import viteLogo from '/vite.svg'
import './index.css'
import Sidenav from './Components/Sidenav'
import Main from './Components/main'
import Work from './Components/Work'
import Portfolio from './Components/Portfolio'
import Contact from './Components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Sidenav />
      <Main />
      <Work />
      <Portfolio />
      <Contact />
    </div>
  )
}

export default App
