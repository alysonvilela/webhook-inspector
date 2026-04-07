import tailwindcss from '@tailwindcss/vite'
import { tanstackRouter } from '@tanstack/router-plugin/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig(() => {
  const getHostname = (url: string) => {
    try {
      return new URL(url).hostname
    } catch {
      return null
    }
  }

  const apiUrl = (process.env.VITE_API_URL || '').trim()
  const publicUrl = (process.env.VITE_PUBLIC_URL || '').trim()

  const allowedHosts = [
    getHostname(apiUrl),
    getHostname(publicUrl),
  ].filter(Boolean) as string[]

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
