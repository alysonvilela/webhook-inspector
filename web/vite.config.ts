import tailwindcss from '@tailwindcss/vite'
import { tanstackRouter } from '@tanstack/router-plugin/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig(() => {
  const apiUrl = (process.env.VITE_API_URL || '').trim()
  const allowedHosts = apiUrl ? [new URL(apiUrl).hostname] : []

  return {
    server: {
      allowedHosts,
    },
    plugins: [
      tanstackRouter({
        target: 'react',
        autoCodeSplitting: true,
      }),
      react(),
      tailwindcss(),
    ],
  }
})
