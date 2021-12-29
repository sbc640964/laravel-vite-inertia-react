// vite.config.js

import reactRefresh from '@vitejs/plugin-react-refresh';


export default ({ command }) => ({
    base: command === 'serve' ? '' : '/build/',
    publicDir: 'fake_dir_so_nothing_gets_copied',
    build: {
        manifest: true,
        outDir: 'public/build',
        rollupOptions: {
            input: 'resources/js/app.js',
        },
    },

    esbuild: {
        jsxInject: `import React from 'react'`,
    },

    plugins: [
        reactRefresh(),
        {
            name: 'blade',
            handleHotUpdate({ file, server }) {
                if (file.endsWith('.blade.php')) {
                    server.ws.send({
                        type: 'full-reload',
                        path: '*',
                    });
                }
            },
        }
    ],

    // css: {
    //     postCss: {
    //         plugins: {
    //             tailwindcss: {},
    //             autoprefixer: {},
    //         },
    //     },
    // },
});
