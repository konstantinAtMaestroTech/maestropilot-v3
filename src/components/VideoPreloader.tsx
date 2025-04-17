import { useEffect } from 'react'

interface VideoPreloaderProps {
  sources: string[]
  priority?: string[] // Videos that must load immediately
}

const VideoPreloader = ({ sources, priority = [] }: VideoPreloaderProps) => {
  useEffect(() => {
    // Immediately load priority videos (hero video)
    priority.forEach(src => {
      const video = document.createElement('video')
      video.style.display = 'none'
      video.preload = 'auto'
      video.src = src
      video.load()
      document.body.appendChild(video)
    })
    
    // Load remaining videos with a slight delay to not block initial render
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
      }, 500) // Wait 1 second after page load
      
      return () => clearTimeout(timer)
    }
  }, [sources, priority])

  return null
}

export default VideoPreloader