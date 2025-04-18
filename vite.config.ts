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
            './src/assets/videos/hero-video.webm',
            './src/assets/videos/mobile-features/identify-component.webm',
            './src/assets/videos/desktop-features/realtime-tracking.webm',
            './src/assets/videos/mobile-features/interactive-detail.webm',
            './src/assets/videos/desktop-features/complex-schedules.webm',
            './src/assets/videos/mobile-features/attachment-download.webm',
             './src/assets/videos/desktop-features/generate-reports.webm'
            // Add other video paths
          ]
        }
      }
    }
  }
})
