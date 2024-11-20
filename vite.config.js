import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // 配置 `@` 为 `src` 路径别名
    },
  },
  build: {
    outDir: "dist", // 输出目录
    sourcemap: false, // 是否生成 sourcemap 文件
  },
});
