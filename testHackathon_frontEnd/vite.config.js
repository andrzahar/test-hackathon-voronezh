import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        host: '91.142.72.178',
        port: 5000,
    },
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './test-setup/setup.test.js',
        testTimeout: 60000,
        include: ['**/*.{test,spec}.{js,mjs, ts}']
    }
})
