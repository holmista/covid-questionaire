import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/landing",
      name: "landing_page",
      component: () => import("../views/PageOne.vue"),
    },
    {
      path: "/basic-information",
      name: "basic_information_page",
      component: () => import("../views/PageTwo.vue"),
    },
    {
      path: "/covid-information",
      name: "covid_information_page",
      component: () => import("../views/PageThree.vue"),
    },
    {
      path: "/vaccination-information",
      name: "vaccination_information_page",
      component: () => import("../views/PageFour.vue"),
    },
    {
      path: "/office-information",
      name: "office_information_page",
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
