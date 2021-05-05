const path = require("path");
import { defineConfig } from "vite";
import vue from '@vitejs/plugin-vue'
import ViteComponents from "vite-plugin-components";
import WindiCSS from "vite-plugin-windicss";
import ViteIcons, { ViteIconsResolver } from "vite-plugin-icons";
import { chromeExtension, simpleReloader } from 'rollup-plugin-chrome-extension'

const config = defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '/src'),
    },
  },
  build: {
    minify: true,
    rollupOptions: {
      input: {
        popup: path.resolve(__dirname, 'popup.html'),
        options: path.resolve(__dirname, 'options.html')
      },
      watch: {
        include: 'public/**'
      }
    }
  },
  
  plugins: [
    vue(),
    ViteComponents({
      customComponentResolvers: [
        ViteIconsResolver({
          componentPrefix: "icon",
        }),
      ],
    }),
    ViteIcons({
      defaultStyle: "",
    }),
    WindiCSS(),
    // chromeExtension(),
    // Adds a Chrome extension reloader during watch mode
    simpleReloader(),
  ],
  
  server: {
    port: 3900,
  },
});

export default config;
