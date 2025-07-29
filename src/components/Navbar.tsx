import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  // Add scroll effect to navbar
  useEffect(() => {
    const handleScroll = () => {
      // Check if we've scrolled past the hero section (approximate height of viewport)
      setIsScrolled(window.scrollY > window.innerHeight * 0.1)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const logoVariants = {
    expanded: {
      scale: 1.4,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    },
    collapsed: {
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    }
  };
  

  return (
    <motion.nav 
      className={`fixed top-5 left-5 right-5 z-40 transition-all duration-300 bg-transparent p-4 ${isScrolled ? 'backdrop-blur-xl shadow-lg' : ''} rounded-md`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ 
        duration: 0.8, 
        ease: "easeOut",
        delay: 0.6 // Delay the navbar entrance
      }}
    >
      <div className="container-custom flex justify-between items-center">
        {/* Logo */}
        <motion.div 
          className="flex items-center cursor-pointer"
          variants={logoVariants}
          initial="expanded"
          animate={isScrolled ? "collapsed" : "expanded"}
          whileHover={{ scale: isScrolled ? 1.45 : 1.05 }}
          whileTap={{ scale: isScrolled ? 1.4 : 1 }}
        >
          <img 
            src='./maestro.png' 
            alt="Company Logo" 
            className="flex h-9 md:h-12 w-auto "
          />
        </motion.div>

        <div
          className='hidden md:block text-lg text-white'
        >
          Maestro Pilot
        </div>

        <div className="flex items-center">
          <a 
            href="https://construction-data-hub.vercel.app"
          >
            <div
              className='text-sm md:text-base p-2 md:py-2 md:px-4 border text-white  hover:bg-primary hover:border-primary hover:text-white'
            >
              Log In
            </div>
          </a>
          <a 
            href="#contact"
          >
            <div
              className='text-sm md:text-base text-background bg-white p-2 md:py-2 md:px-4 border border-white hover:bg-primary hover:border-primary hover:text-white'
            >
              Get Started
            </div>
          </a>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar