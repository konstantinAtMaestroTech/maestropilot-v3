import { useEffect,} from 'react'
import { motion } from 'framer-motion'

interface VideoPreloaderProps {
  sources: string[]
  images?: string[] // Images to preload
  priority?: string[] // Videos that must load immediately
  onPriorityLoaded?: () => void // Callback when priority videos are loaded
  onAllLoaded?: () => void // Callback when everything is loaded
  showProgress?: boolean // Whether to show loading progress
  isExiting?: boolean // Whether the preloader is exiting
}

const VideoPreloader = ({ 
  sources, 
  images = [], 
  priority = [], 
  onPriorityLoaded, 
  onAllLoaded,
  showProgress = false,
  isExiting = false
}: VideoPreloaderProps) => {

  useEffect(() => {
    const allAssets = [...sources, ...images]
    const totalAssets = allAssets.length
    let loadedCount = 0
    let priorityLoadedCount = 0


    const handleAssetLoad = () => {
      loadedCount++
      
      if (loadedCount === totalAssets && onAllLoaded) {
        setTimeout(() => {
          onAllLoaded()
        }, 300) // Small delay to show 100% briefly
      }
    }

    const handlePriorityLoad = () => {
      priorityLoadedCount++
      if (priorityLoadedCount === priority.length && onPriorityLoaded) {
        onPriorityLoaded()
      }
    }

    // Load priority videos first
    if (priority.length > 0) {
      priority.forEach(src => {
        const video = document.createElement('video')
        video.style.display = 'none'
        video.preload = 'auto'
        video.src = src
        
        video.addEventListener('loadeddata', () => {
          handlePriorityLoad()
          handleAssetLoad()
        })
        
        video.addEventListener('error', () => {
          console.warn(`Failed to load priority video: ${src}`)
          handlePriorityLoad()
          handleAssetLoad()
        })
        
        video.load()
        document.body.appendChild(video)
      })
    } else if (onPriorityLoaded) {
      onPriorityLoaded()
    }
    
    // Load remaining videos
    const nonPriorityVideos = sources.filter(src => !priority.includes(src))
    nonPriorityVideos.forEach(src => {
      const video = document.createElement('video')
      video.style.display = 'none'
      video.preload = 'auto'
      video.src = src
      
      video.addEventListener('loadeddata', handleAssetLoad)
      video.addEventListener('error', () => {
        console.warn(`Failed to load video: ${src}`)
        handleAssetLoad()
      })
      
      video.load()
      document.body.appendChild(video)
    })
    
    // Load images
    images.forEach(src => {
      const img = new Image()
      img.onload = handleAssetLoad
      img.onerror = () => {
        console.warn(`Failed to load image: ${src}`)
        handleAssetLoad()
      }
      img.src = src
    })

    // Cleanup function
    return () => {
      // Remove any created video elements
      const videos = document.querySelectorAll('video[style*="display: none"]')
      videos.forEach(video => video.remove())
    }
  }, [sources, images, priority, onPriorityLoaded, onAllLoaded])

  if (!showProgress) return null

  return (
    <motion.div 
      className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center"
      initial={{ opacity: 1 }}
      animate={{ 
        opacity: isExiting ? 0 : 1,
        scale: isExiting ? 1.1 : 1
      }}
      transition={{ 
        duration: isExiting ? 0.8 : 0.6, 
        ease: "easeInOut" 
      }}
    >
      {/* Maestro Logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: isExiting ? 0 : 1, 
          scale: isExiting ? 0.8 : 1,
          y: isExiting ? -20 : 0 
        }}
        transition={{ 
          duration: isExiting ? 0.6 : 0.6, 
          ease: "easeOut",
          delay: isExiting ? 0 : 0
        }}
        className="mb-12"
      >
        <img 
          src="/maestro.png" 
          alt="Maestro" 
          className="w-20 h-20 md:w-24 md:h-24 object-contain"
        />
      </motion.div>
    </motion.div>
  )
}

export default VideoPreloader