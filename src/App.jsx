import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Main from './components/Main/Main'
import About from './components/About/About'
import Work from './components/Work/Work'
import Contact from './components/Contact/Contact'
import Projects from './components/Projects/Projects'
import BottomBar from './components/BottomBar/BottomBar'

function App() {

  const [count, setCount] = useState(0)

  return (
    <>
  

   <BottomBar/>
    <section id='main'>
    <Navbar/>
    <Main/>
  </section>


  <section id='about'> 
  <About/>
  </section>
    

 <section id='work'>
  <Work/>
 </section>
{/* Projects */}
<div id='projects'>

    <Projects/>
</div>
 <section id='contact'>
 <Contact/>
 </section>



    </>
  )
}

export default App
