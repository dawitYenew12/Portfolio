import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['@react-three/drei', 'react-responsive', 'gsap'],  // Add the external modules here
    },
  },
  optimizeDeps: {
    include: ['@react-three/drei', 'react-responsive', 'gsap'], // Ensure both are included in optimized dependencies
  },
});
