import { motion, useScroll } from 'framer-motion'
import './App.css'

// Components
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import AboutUs from './components/AboutUs'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Vision from './components/Vision'

function App() {
  const { scrollYProgress } = useScroll()
  
  // Parallax effect for background

  return (
    <div className="relative overflow-hidden">
      {/* Progress bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-50"
        style={{ scaleX: scrollYProgress, transformOrigin: '0%' }}
      />
      
      <Navbar />
      <Hero />
      <Vision />
      <Features />
      <AboutUs />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
