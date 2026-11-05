import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Some hosted development environments expose the proxy port via PORT.
// Vite otherwise defaults to 5173, which may not match the preview proxy.
const assignedPort = Number(process.env.PORT);
const hasAssignedPort = Number.isInteger(assignedPort) && assignedPort > 0 && assignedPort <= 65535;

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: hasAssignedPort ? assignedPort : 5173,
    strictPort: true,
  },
  preview: {
    host: '0.0.0.0',
    port: hasAssignedPort ? assignedPort : 4173,
    strictPort: true,
  },
});
