import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANT: change '/friendship-day/' to match your GitHub repo name exactly.
// If your repo is https://github.com/you/my-repo, this should be '/my-repo/'.
export default defineConfig({
  plugins: [react()],
  base: '/friendship-day/',
})
