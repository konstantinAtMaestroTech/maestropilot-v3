import { useEffect } from 'react'

interface VideoPreloaderProps {
  sources: string[]
}

const VideoPreloader = ({ sources }: VideoPreloaderProps) => {
  useEffect(() => {
    sources.forEach(src => {
      const video = document.createElement('video')
      video.style.display = 'none'
      video.preload = 'auto'
      video.src = src
      video.load()
      
      // Remove after loaded to free memory
      video.onloadeddata = () => {
        // Keep video in memory but remove from DOM
        setTimeout(() => video.remove(), 1000)
      }
      
      document.body.appendChild(video)
    })
  }, [sources])

  return null
}

export default VideoPreloader