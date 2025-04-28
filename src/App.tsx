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
import identifyComp from './assets/videos/mobile-features/Identify-Component.mp4?url'
import realtimeTracking from './assets/videos/desktop-features/Realtime-Tracking.mp4?url'

import interactiveDetail from './assets/videos/mobile-features/Interactive-Detail.mp4?url'
import complexSchedules from './assets/videos/desktop-features/Complex-Schedules.mp4?url'

import attachmentDownload from './assets/videos/mobile-features/Attachment-Download.mp4?url'
import generateReports from './assets/videos/desktop-features/Generate-Reports.mp4?url'

import heroVideo from './assets/videos/Hero-Video.mp4?url'


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
