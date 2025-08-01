import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      '/leetcode': {
        target: 'https://leetcode.com',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/leetcode/, ''),
      },
      '/codeforces': {
        target: 'https://codeforces.com',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/codeforces/, ''),
      },
      '/api/codechef': {
        target: 'https://www.codechef.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/codechef/, '/users')
      }
    },
  },
});
