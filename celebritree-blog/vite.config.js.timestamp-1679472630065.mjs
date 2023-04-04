// vite.config.js
import { defineConfig } from "file:///E:/Projects/celebritree-blog/celebritree-blog/node_modules/vite/dist/node/index.js";
import react from "file:///E:/Projects/celebritree-blog/celebritree-blog/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [react()]
});
export {
  vite_config_default as default
};