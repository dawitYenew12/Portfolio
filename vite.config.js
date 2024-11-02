import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

// Define __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@react-three/drei': path.resolve(__dirname, 'node_modules/@react-three/drei'),
    }
  },
  optimizeDeps: {
    include: ['@react-three/drei']
  },
});
