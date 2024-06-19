import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';

export default ({ mode }: { mode: string }) => {
    process.env = {
        ...process.env,
        ...loadEnv(mode, process.cwd()),
    };

    return defineConfig({
        server: {
            port: 3002,
        },
        preview: {
            port: 4173,
        },
        plugins: [react()],
    });
};
