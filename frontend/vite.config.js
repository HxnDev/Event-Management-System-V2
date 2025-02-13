import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    root: './', // Ensure Vite serves from the project root
    server: {
        port: 8001, // Change port to avoid conflicts
        host: true,
    }
});
