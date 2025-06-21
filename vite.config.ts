import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './src/test/setup.ts', // Optional: Add setup file for global configurations
        exclude: ['node_modules/**', 'dist/**'] // Exclude node_modules and dist folders
    }
});
