import express from 'express';
import ViteExpress from 'vite-express';
import api from './api.js';

const port = process.env.PORT || 20000;
const node_env = process.env.NODE_ENV;

ViteExpress.config({
    inlineViteConfig: {
        root: process.cwd(),
        base: '/',
        build: {
            outDir: 'dist',
        }
    }
})

const app = express();
app.use('/api', api());

const viteExpressServer = ViteExpress.listen(app, port, () => {
    console.log(`${node_env} server listening on port ${port}`);
});

process.on('SIGINT', () => {
    viteExpressServer.close(() => {
        process.exit(0);
    })
}); 

process.on('SIGTERM', () => {
    viteExpressServer.close(() => {
        process.exit(0);
    })
}); 