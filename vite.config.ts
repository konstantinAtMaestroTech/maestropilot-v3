import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  base: '/',
  build: {
    assetsInlineLimit: 0, // Disable asset inlining for videos
    rollupOptions: {
      output: {
        manualChunks: {
          // Group video assets together
          'video-assets': [
            // List paths to your video files
            './src/assets/videos/Hero-Video.mp4',
            './src/assets/videos/mobile-features/Identify-Component.mp4',
            './src/assets/videos/desktop-features/Realtime-Tracking.mp4',
            './src/assets/videos/mobile-features/Interactive-Detail.mp4',
            './src/assets/videos/desktop-features/Complex-Schedules.mp4',
            './src/assets/videos/mobile-features/Attachment-Download.mp4',
             './src/assets/videos/desktop-features/Generate-Reports.mp4'
            // Add other video paths
          ]
        }
      }
    }
  }
})
