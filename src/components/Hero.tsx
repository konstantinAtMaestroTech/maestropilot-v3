import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import heroVideoDesktop from '../assets/videos/hero-video.webm?url'
import heroVideoMobile from '../assets/videos/hero-video-mobile.webm?url'

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  // Parallax effects
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      }
    }
  }
  
  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  return (
    <div
      className='bg-background'
    >
      <motion.div 
        className="fixed h-screen top-0 inset-0 z-0 pointer-events-none"
        style={{ opacity }}
      >
        <video
          autoPlay 
          loop 
          muted
          playsInline
          className="w-full h-full object-cover hidden md:block"
          poster='./images/hero-video.jpg'
        >
          <source src={heroVideoDesktop} type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </motion.div>
      <motion.div 
        className="fixed h-screen top-0 inset-0 z-0 pointer-events-none"
        style={{ opacity }}
      >
        <video
          autoPlay 
          loop 
          muted
          playsInline
          className="w-full h-full object-cover md:hidden"
          poster='./images/hero-video-mobile.jpg'
        >
          <source src={heroVideoMobile} type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </motion.div>
      <div ref={ref} className="relative h-screen overflow-hidden px-10 flex justify-center bg-transparent" id="home">
        {/* Background with parallax effect */}
        
        {/* Hero content */}
        <div className="relative z-10 h-full flex items-end py-5 md:py-20">
          <div>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className='flex flex-col justify-end item-center'
            >
              <motion.h1 
                className="text-2xl sm:text-5xl md:text-8xl md:text-nowrap mb-3 md:mb-6 bg-white bg-clip-text text-transparent"
                variants={itemVariants}
              >
                From factory floor to final install
              </motion.h1>
              
              <motion.p 
                className="text-lg sm:text-3xl md:text-4xl text-white mb-2 md:mb-8"
                variants={itemVariants}
              >
                <span className='text-primary'>Maestro Pilot</span> bridges production data and site execution for a faster build.
              </motion.p>
              
            </motion.div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Hero 