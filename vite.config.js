import { defineConfig } from 'vite';
import { ViteEjsPlugin }  from 'vite-plugin-ejs';
import { resolve } from 'path';
import { readFileSync } from 'fs';

export default defineConfig({
    plugins: [
        ViteEjsPlugin({
            Partialheader: readFileSync(resolve(__dirname,'./partials/header.html'),'UTF-8'),
            Partialfooter: readFileSync(resolve(__dirname,'./partials/footer.html') ,'UTF-8'),

            pages: [
                {
                    filename: 'index.html', // Nombre del archivo de salida en /dist (y en dev server)
                    template: './index.html', // Ruta al archivo HTML de entrada (donde están tus <%= %>)
                },
                {
                    filename: 'pages/productos.html',
                    template: './pages/productos.html',
                },
                {
                    filename: 'pages/servicios.html',
                    template: './pages/servicios.html',
                },
                {
                    filename: 'pages/marcas.html',
                    template: './pages/marcas.html',
                },
                {
                    filename: 'pages/nosotros.html',
                    template: './pages/nosotros.html',
                },
            ],
        }),
    ],

    build: {
        rollupOptions: {
            input: {
                /* Paginas html */
                inicio: resolve (__dirname,'./index.html'),
                productos: resolve (__dirname, './pages/productos.html'),
                servicios: resolve (__dirname, './pages/servicios.html'),
                marcas: resolve (__dirname, './pages/marcas.html'),
                nosotros: resolve (__dirname, './pages/nosotros.html'),
            },
        },
    },
});