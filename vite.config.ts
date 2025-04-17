import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  base: '/maestropilot-v3/',
  build: {
    assetsInlineLimit: 0, // Disable asset inlining for videos
    rollupOptions: {
      output: {
        manualChunks: {
          // Group video assets together
          'video-assets': [
            // List paths to your video files
            './src/assets/videos/hero-video.webm',
            './src/videos/mobile-features/identify-component.webm?url',
            './src/videos/desktop-features/realtime-tracking.webm?url',
            './src/videos/mobile-features/interactive-detail.webm?url',
            './src/videos/desktop-features/complex-schedules.webm?url',
            './src/videos/mobile-features/attachment-download.webm?url',
             './src/videos/desktop-features/generate-reports.webm?url'
            // Add other video paths
          ]
        }
      }
    }
  }
})
