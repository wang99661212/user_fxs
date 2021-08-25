import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);


const routes = [
  {
    path: '/',
    component: () => import('@/views/index')
  },
  {
    path: '/zhuangxiugonglue',
    component: () => import('@/views/zhuangxiugonglue')
  },
  {
    path: "/li",
    component: () => import("@/views/li")
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
    path: "/ln",
    component: () => import('@/views/ln')
  },
  {
    path: "/ln2",
    component: () => import('@/views/ln2')
  },
  {
    path: "/baili",
    component: () => import('@/views/baili')
  },
  {
    path: "/wzz",
    component: () => import('@/views/wzz')
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;