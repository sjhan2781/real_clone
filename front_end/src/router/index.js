import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Timeline from "../components/Timeline.vue";
import Login from "../components/Login.vue";
import SignIn from "../components/SignUp.vue";
import Detail from "../components/Detail.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home,
    children: [
      {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
      },
      {
        path: "/timeline",
        name: "Timeline",
        component: Timeline,
      },
      {
        path: "/detail",
        name: "Detail",
        component: Detail,
      },
    ],
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/signin",
    name: "signin",
    component: SignIn,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;