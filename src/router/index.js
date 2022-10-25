import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "landing_page",
      component: () => import("@/views/PageOne.vue"),
    },
    {
      path: "/basic-information",
      name: "basic_information_page",
      component: () => import("@/views/PageTwo.vue"),
    },
    {
      path: "/covid-information",
      name: "covid_information_page",
      component: () => import("@/views/PageThree.vue"),
    },
    {
      path: "/vaccination-information",
      name: "vaccination_information_page",
      component: () => import("@/views/PageFour.vue"),
    },
    {
      path: "/office-information",
      name: "office_information_page",
      component: () => import("@/views/PageFive.vue"),
    },
    {
      path: "/thank-you",
      name: "thank_you_page",
      component: () => import("@/views/PageSix.vue"),
    },
  ],
});

export default router;
