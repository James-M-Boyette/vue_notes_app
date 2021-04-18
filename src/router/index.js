import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Toolbar from "../views/ToolBar.vue";
import Note from "../views/NoteContainer.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Toolbar",
    name: "Toolbar",
    component: Toolbar,
  },
  {
    path: "/NoteContainer",
    name: "Note",
    component: Note,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
