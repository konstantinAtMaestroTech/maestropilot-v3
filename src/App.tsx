import { motion, useScroll } from 'framer-motion'
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
      <CookieConsent
        location="bottom"
        buttonText="Accept"
        declineButtonText="Decline"
        enableDeclineButton
        cookieName="gdpr-consent"
        style={{ 
          background: "#FF4300",
          opacity: 0.9,
          zIndex: 999, // Ensure it's above everything
          backdropFilter: "blur(5px)" // Modern glass effect
        }}
        buttonStyle={{ 
          background: "#FF4300",
          borderWidth: 2,
          borderColor: 'white',
          borderStyle: 'solid',
          color: "white", 
          fontSize: "13px",
          borderRadius: "4px",
          padding: "8px 16px",
          fontWeight: "500",
          transition: "all 0.3s ease",
          boxShadow: "0 0 0 0 rgba(255, 255, 255, 0.5)",
          cursor: "pointer",
        }}
        declineButtonStyle={{
          background: "#1E1E1E",
          borderWidth: 2,
          borderColor: '#1E1E1E',
          borderStyle: 'solid',
          color: "white",
          fontSize: "13px",
          borderRadius: "4px",
          padding: "8px 16px",
          fontWeight: "500",
          marginRight: "10px",
          cursor: "pointer",
        }}
        onDecline={() => {
          // Handle decline action if needed
        }}
        expires={150}
      >
        Maestropilot.ai uses cookies to enhance your experience. Learn more about our
        {" "}
        <a href="https://www.maestro-tech.com/cookie-policy/" className="text-white underline"> cookies policy</a>
        {" "}
        and
        {" "}
        <a href="https://www.maestro-tech.com/privacy-policy/" className="text-white underline"> privacy policy</a>
      </CookieConsent>
    </div>
  )
}

export default App
