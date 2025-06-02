import './App.css'
import Hero from './Pages/Hero'
import Navbar from './Components/Navbar'
import About from './Pages/About'
import Projects from './Pages/Project'
import Skills from './Pages/Skills'
import Contact from './Pages/Contact'
import Footer from './Components/Footer'
function App() {
 

  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
