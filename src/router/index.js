import { createRouter, createWebHashHistory } from "vue-router";
import { routeConfigs } from "./config";
import NProgress from "nprogress";

const router = createRouter({
  history: createWebHashHistory(),
  routes: routeConfigs,
});

export default router;
