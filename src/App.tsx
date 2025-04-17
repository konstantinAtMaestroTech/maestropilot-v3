import { motion, useScroll } from 'framer-motion'
import './App.css'
import VideoPreloader from './components/VideoPreloader'

// Components
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import AboutUs from './components/AboutUs'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Vision from './components/Vision'

//Videos
import identifyComp from './assets/videos/mobile-features/identify-component.webm?url'
import realtimeTracking from './assets/videos/desktop-features/realtime-tracking.webm?url'

import interactiveDetail from './assets/videos/mobile-features/interactive-detail.webm?url'
import complexSchedules from './assets/videos/desktop-features/complex-schedules.webm?url'

import attachmentDownload from './assets/videos/mobile-features/attachment-download.webm?url'
import generateReports from './assets/videos/desktop-features/generate-reports.webm?url'

import heroVideo from './assets/videos/hero-video.webm?url'


function App() {
  const { scrollYProgress } = useScroll()
  
  const videoSources = [
    identifyComp,
    realtimeTracking,
    interactiveDetail,
    complexSchedules,
    attachmentDownload,
    generateReports
  ]

  return (
    <div className="relative overflow-hidden">
      {/* Progress bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-50"
        style={{ scaleX: scrollYProgress, transformOrigin: '0%' }}
      />
      <VideoPreloader 
        sources={videoSources} 
        priority={[heroVideo]} // Load hero video immediately
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
