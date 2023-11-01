

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// # leanpub-start-insert
import eslint from 'vite-plugin-eslint';
// # leanpub-end-insert

// https://vitejs.dev/config/
export default defineConfig({
// # leanpub-start-insert
  plugins: [react(), eslint()],
// # leanpub-end-insert
});