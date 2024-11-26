import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vite.dev/config/
export default ({ command, mode }) => {
  const envConfig = loadEnv(mode, process.cwd());
  console.log(envConfig);
  return defineConfig({
    plugins: [vue()],
    base: envConfig.VITE_PUBLICK_PATH || "/",

    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"), // 配置 `@` 为 `src` 路径别名
      },
    },
    build: {
      outDir: envConfig.VITE_OUT_PUT_DIR || "dist",
      rollupOptions: {
        output: {
          entryFileNames: "assets/[name].[hash].js",
          chunkFileNames: "assets/[name].[hash].js",
          assetFileNames: "assets/[name].[hash].[ext]", // 图片、CSS 等资源
        },
      },
      sourcemap: false, // 是否生成 sourcemap 文件
    },
    server: {
      proxy: {
        "/rsshub": {
          target: "https://rsshub.app", // RSSHub 的地址
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/rsshub/, ""), // 重写路径
        },
      },
    },
  });
};
