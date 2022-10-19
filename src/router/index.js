import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/1",
      name: "page-one",
      component: () => import("../views/PageOne.vue"),
    },
    {
      path: "/2",
      name: "page-two",
      component: () => import("../views/PageTwo.vue"),
    },
    {
      path: "/3",
      name: "page-three",
      component: () => import("../views/PageThree.vue"),
    },
    {
      path: "/4",
      name: "page-four",
      component: () => import("../views/PageFour.vue"),
    },
    {
      path: "/5",
      name: "page-five",
      component: () => import("../views/PageFive.vue"),
    },
    {
      path: "/6",
      name: "page-six",
      component: () => import("../views/PageSix.vue"),
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
