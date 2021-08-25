import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        component: () =>
            import ("@/views/index"),
    },
    {
        path: "/li",
        component: () =>
            import ("@/views/li"),
    },
    {
        path: "*",
        redirect: "/",
    },
    {
        path: '/xiaowang',
        component: () => import('@/views/xiaowang')
      },
      {
        path: '/zb',
        component: () => import('@/views/zb')
      },
      {
          path:"ln",
          component: () => import('@/views/ln')
      }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;