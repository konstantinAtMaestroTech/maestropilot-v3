import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Add scroll effect to navbar
  useEffect(() => {
    const handleScroll = () => {
      // Check if we've scrolled past the hero section (approximate height of viewport)
      setIsScrolled(window.scrollY > window.innerHeight * 0.8)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav 
      className={`fixed top-5 left-5 right-5 z-40 transition-all duration-300 bg-transparent shadow-lg p-4 backdrop-blur-xl rounded-md`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container-custom flex justify-between items-center">
        {/* Logo */}
        <motion.a 
          href="#" 
          className={`text-2xl font-bold ${isScrolled ? 'text-primary' : 'bg-white bg-clip-text text-transparent'}`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          MaestroPilot
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLink href="https://construction-data-hub.vercel.app">Log In</NavLink>
          <NavLink href="#contact" >Get Started</NavLink>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 focus:outline-none"
          >
            <span className={`block w-6 h-0.5 bg-white mb-1.5 transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white mb-1.5 transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div 
        className={`${isMobileMenuOpen ? 'flex' : 'hidden'} md:hidden flex-col bg-white absolute w-full py-4 shadow-md`}
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: isMobileMenuOpen ? 1 : 0,
          height: isMobileMenuOpen ? 'auto' : 0
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="container-custom flex flex-col space-y-4">
          <MobileNavLink href="https://construction-data-hub.vercel.app" onClick={() => setIsMobileMenuOpen(false)}>Log In</MobileNavLink>
          <MobileNavLink href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Get Started</MobileNavLink>
        </div>
      </motion.div>
    </motion.nav>
  )
}

// NavLink component for desktop
const NavLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
  <motion.a 
    href={href} 
    className={`font-medium transition-colors text-white hover:text-primary`}
    whileHover={{ y: -2 }}
    whileTap={{ y: 0 }}
  >
    {children}
  </motion.a>
)

// NavLink component for mobile
const MobileNavLink = ({ href, onClick, children }: { href: string, onClick: () => void, children: React.ReactNode }) => (
  <a 
    href={href} 
    className="text-gray-800 font-medium p-2 hover:bg-gray-50 rounded-md"
    onClick={onClick}
  >
    {children}
  </a>
)

export default Navbar