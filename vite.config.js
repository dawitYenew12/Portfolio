import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['@react-three/drei'],  // Add the external module here
    },
  },
  optimizeDeps: {
    include: ['@react-three/drei'], // Ensure it's included in optimized dependencies
  },
});
