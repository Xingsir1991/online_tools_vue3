import RouteLayout from "@/layout/RouteLayout.vue";
import UserLayout from "@/layout/UserLayout.vue";
import LoginLayout from "@/layout/LoginLayout.vue";

export const routeConfigs = [
  {
    path: "/",
    redirect: "/online_tools",
    component: UserLayout,
    children: [
      {
        path: "online_tools",
        name: "OnlineTools",
        component: () => import("../views/online_tools/index.vue"),
        meta: {
          title: "在线工具",
        },
      },
      {
        path: "navigation_website",
        name: "NavigationWebsite",
        component: () => import("../views/navigation_website/index.vue"),
        meta: {
          title: "导航网站",
        },
      },
      {
        path: "rss_reader",
        name: "RssReader",
        component: () => import("../views/rss_reader/index.vue"),
        meta: {
          title: "rss阅读",
        },
      },
    ],
  },
  {
    path: "/auth",
    component: LoginLayout,
    children: [
      {
        path: "login",
        name: "LoginView",
        component: () => import("../views/login/LoginView.vue"),
        meta: {
          title: "登录",
        },
      },
      {
        path: "register",
        name: "RegisterView",
        component: () => import("../views/login/RegisterView.vue"),
        meta: {
          title: "注册",
        },
      },
    ],
  },
  {
    path: "/404",
    name: "PageError404",
    component: () => import("../views/error/PageError404.vue"),
    meta: {
      title: "404 找不到页面",
    },
  },
  {
    path: "/403",
    name: "PageError403",
    component: () => import("../views/error/PageError403.vue"),
    meta: {
      title: "403 无权限访问",
    },
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: {
      name: "PageError404",
    },
  },
];
