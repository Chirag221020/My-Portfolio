import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Main from './components/Main/Main'
import About from './components/About/About'
import Work from './components/Work/Work'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <section>
    <Navbar/>
  </section>
    <section className='Main'>
   
    <Main/>
    </section>
    

    
   
 <section className='About'>
 <About/>
 
 </section>
 <section>
  <Work/>
 </section>
   
 
    </>
  )
}

export default App
