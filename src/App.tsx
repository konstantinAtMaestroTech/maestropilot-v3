import { motion, useScroll } from 'framer-motion'
import { useState } from 'react'
import './App.css'
import VideoPreloader from './components/VideoPreloader'
import CookieConsent from "react-cookie-consent";

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
  const [isHeroVideoLoaded, setIsHeroVideoLoaded] = useState(false)
  
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
      {/* Loading screen - shown until hero video is loaded */}
      {!isHeroVideoLoaded && (
        <div className="fixed inset-0 bg-white dark:bg-background z-50 flex items-center justify-center">
        </div>
      )}
      
      {/* Progress bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-50"
        style={{ scaleX: scrollYProgress, transformOrigin: '0%' }}
      />
      <VideoPreloader 
        sources={videoSources} 
        priority={[heroVideo]} 
        onPriorityLoaded={() => setIsHeroVideoLoaded(true)}
      />
      
      <div className={isHeroVideoLoaded ? 'opacity-100 transition-opacity duration-500' : 'opacity-0'}>
        <Navbar />
        <Hero />
        <Vision />
        <Features />
        <AboutUs />
        <Contact />
        <Footer />
      </div>
      
      <CookieConsent
        location="bottom"
        buttonText="Accept"
        declineButtonText="Decline"
        enableDeclineButton
        cookieName="gdpr-consent"
        style={{ 
          background: "#FF4300",
          opacity: 0.9,
        }}
      />
    </div>
  )
}

export default App