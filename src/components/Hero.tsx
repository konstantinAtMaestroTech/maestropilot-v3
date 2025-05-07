import { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import heroVideoDesktop from '../assets/videos/Hero-Video.mp4?url'
import heroVideoMobile from '../assets/videos/Hero-Video-Mobile.mp4?url'

const Hero = () => {

  const desktopVideoRef = useRef<HTMLVideoElement>(null)
  const mobileVideoRef = useRef<HTMLVideoElement>(null)

  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  // Parallax effects
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  useEffect(() => {
    // Function to ensure videos play
    const playVideos = () => {
      if (desktopVideoRef.current) {
        desktopVideoRef.current.play().catch(e => console.log("Desktop video autoplay prevented:", e));
      }
      if (mobileVideoRef.current) {
        mobileVideoRef.current.play().catch(e => console.log("Mobile video autoplay prevented:", e));
      }
    };
    
    // Play videos immediately
    playVideos();

  }, []);
  
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
    <section
      className='h-svh bg-background'
    >
      <motion.div 
        className="fixed h-screen top-0 inset-0 z-0 pointer-events-none"
        style={{ opacity }}
      >
        <video
          ref={desktopVideoRef}
          autoPlay 
          loop 
          muted
          playsInline
          className="w-full h-full object-cover hidden lg:block"
          poster='./images/hero-video.jpg'
        >
          <source src={heroVideoDesktop} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </motion.div>
      <motion.div 
        className="fixed h-screen top-0 inset-0 z-0 pointer-events-none"
        style={{ opacity }}
      >
        <video
          ref={mobileVideoRef}
          autoPlay 
          loop 
          muted
          playsInline
          className="w-full h-full object-cover lg:hidden"
          poster='./images/hero-video-mobile.jpg'
        >
          <source src={heroVideoMobile} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </motion.div>
      <div ref={ref} className="relative h-dvh overflow-hidden px-10 flex justify-center bg-transparent" id="home">
        {/* Background with parallax effect */}
        
        {/* Hero content */}
        <div className="relative z-10 h-full flex items-end py-5 md:pt-20">
          <div>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible" 
              className='flex flex-col justify-end item-center'
            >
              <motion.h1 
                className="hidden md:block text-left sm:text-center text-3xl sm:text-4xl md:text-5xl lg:text-8xl mb-3 md:mb-4 bg-white bg-clip-text text-transparent"
                variants={itemVariants}
              >
                From factory floor to final install
              </motion.h1>
              
              <motion.h2 
                className="hidden md:block text-left sm:text-center text-lg sm:text-2xl md:text-3xl text-white mb-2 md:mb-5"
                variants={itemVariants}
              >
                <span className='text-primary'>Maestro Pilot</span> bridges production data and site execution for a faster build.
              </motion.h2>
              
            </motion.div>
          </div>
        </div>

        <div className='relative z-10 flex items-end my-12 md:hidden'>
          <motion.h2
            className="text-left text-white text-5xl"
            variants={itemVariants}
          >
            <span className='text-primary'>Maestro Pilot:</span> The operating system for industrialised construction
          </motion.h2>
        </div>
        
      </div>
    </section>
  )
}

export default Hero 