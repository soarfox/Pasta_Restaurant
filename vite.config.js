import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import eslintPlugin from 'vite-plugin-eslint';
import { fileURLToPath, URL } from 'node:url';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    eslintPlugin({
      include: ['src/**/*.js', 'src/**/*.vue', 'src/*.js', 'src/*.vue'],
    }),
  ],
  resolve: {
    // 寫法參考自: https://stackoverflow.com/questions/66043612/vue3-vite-project-alias-src-to-not-working
    alias: [
      { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
      { find: '@utils', replacement: fileURLToPath(new URL('./src/utils', import.meta.url)) },
      { find: '@mixins', replacement: fileURLToPath(new URL('./src/mixins', import.meta.url)) },
    ],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/assets/scss/global.scss";',
      },
    },
  },
  // 請手動新增下方這一行, 設定vite專案在編譯完成後的路徑, 對應到github的儲存庫名稱, 請記得在此github儲存庫的前後方都需要加上一個/符號; 參考自:Vue直播班課程影片內容及'正確的設置 Vue Cli 與 Vite 編譯後的路徑'文章 https://israynotarray.com/nodejs/20230214/796256725/#%E8%A8%AD%E7%BD%AE-Vite
  base: process.env.NODE_ENV === 'production' ? '/Pasta_Restaurant/' : '/',
});
