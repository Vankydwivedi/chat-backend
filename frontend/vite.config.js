import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/auth": {
        target: "https://chat-backend-ytnl.onrender.com", // Backend URL
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
