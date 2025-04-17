import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import heroVideo from '../assets/videos/hero-video.webm'

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  // Parallax effects
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])
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
    <div ref={ref} className="relative h-screen overflow-hidden px-10 flex justify-center bg-background" id="home">
      {/* Background with parallax effect */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y, opacity }}
      >
        <video
          autoPlay 
          loop 
          muted
          className="w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </motion.div>
      
      {/* Hero content */}
      <div className="relative z-10 h-full flex items-end py-20">
        <div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className='flex flex-col justify-end items-center'
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl md:text-nowrap font-semibold mb-6 bg-white bg-clip-text text-transparent"
              variants={itemVariants}
            >
              From factory floor to final install
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl lg:text-3xl text-white mb-8"
              variants={itemVariants}
            >
              <span className='text-primary'>MaestroPilot</span> bridges production data and site execution for a faster build.
            </motion.p>
            
          </motion.div>
        </div>
      </div>
      
    </div>
  )
}

export default Hero 