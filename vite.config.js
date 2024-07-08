import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // This will bind to all network interfaces
    port: 5173 // You can choose any port, but make sure it matches your Render configuration
  }
})
