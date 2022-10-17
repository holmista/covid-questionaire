import { createRouter, createWebHistory } from "vue-router";
import PageTwo from "../views/PageTwo.vue";
import PageThree from "../views/PageThree.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/2",
      name: "page-two",
      component: PageTwo,
    },
    {
      path: "/3",
      name: "page-three",
      component: PageThree,
    },
    // {
    //   path: "/about",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import("../views/AboutView.vue"),
    // },
  ],
});

export default router;
