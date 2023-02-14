// Composables
import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Fetch from "../views/Fetch.vue";
import Input from "../views/Input.vue";
import Parent from "../components/Parent.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/input",
    name: "input",
    component: Input,
  },
  {
    path: "/fetch",
    name: "fetch",
    component: Fetch,
  },
  {
    path: "/parent",
    name: "parent",
    component: Parent,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
