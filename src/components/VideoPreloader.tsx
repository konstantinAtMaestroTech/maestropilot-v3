import { useEffect } from 'react'

interface VideoPreloaderProps {
  sources: string[]
  priority?: string[] // Videos that must load immediately
  onPriorityLoaded?: () => void // Callback when priority videos are loaded
}

const VideoPreloader = ({ sources, priority = [], onPriorityLoaded }: VideoPreloaderProps) => {
  useEffect(() => {
    // For priority videos (hero video)

    if (priority.length > 0) {
      let loadedCount = 0
      
      priority.forEach(src => {
        const video = document.createElement('video')
        video.style.display = 'none'
        video.preload = 'auto'
        video.src = src
        
        // Listen for the loadeddata event
        video.addEventListener('loadeddata', () => {
          loadedCount++
          if (loadedCount === priority.length && onPriorityLoaded) {
            onPriorityLoaded()
          }
        })
        
        video.load()
        document.body.appendChild(video)
      })
    } else if (onPriorityLoaded) {
      // If no priority videos, immediately trigger the callback
      onPriorityLoaded()
    }
    
    // Load remaining videos with a slight delay
    const nonPriorityVideos = sources.filter(src => !priority.includes(src))
    
    if (nonPriorityVideos.length > 0) {
      const timer = setTimeout(() => {
        nonPriorityVideos.forEach(src => {
          const video = document.createElement('video')
          video.style.display = 'none'
          video.preload = 'auto'
          video.src = src
          video.load()
          document.body.appendChild(video)
        })
      }, 500)
      
      return () => clearTimeout(timer)
    }
  }, [sources, priority, onPriorityLoaded])

  return null
}

export default VideoPreloader