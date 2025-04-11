import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    react(),
    tailwindcss()
  ],
  server: {
    allowedHosts: [
      'c40d5c7b-a104-40b7-a174-746862e819b2-00-ksx7nxsohuzb.spock.replit.dev',
      'localhost',  // Allow localhost for testing
      '0.0.0.0'      // Allow external access for Replit
    ]
  }
})
