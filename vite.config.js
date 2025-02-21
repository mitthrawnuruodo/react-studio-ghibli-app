import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import tailwindPostcss from '@tailwindcss/postcss'; // Import the new PostCSS plugin

export default defineConfig({
  plugins: [
    react(), // React plugin for Vite
    tailwindcss(), // Tailwind CSS plugin for Vite
  ],
  css: {
    postcss: {
      plugins: [
        tailwindPostcss, // Use the new PostCSS plugin
      ],
    },
  },
  server: {
    port: 1183, // Set the server port to 1183
  },
});