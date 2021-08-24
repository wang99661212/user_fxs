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
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;