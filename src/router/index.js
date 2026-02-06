import { createRouter, createWebHistory } from "vue-router";
import MainPage from "@/views/MainPage.vue";
import CakePage from "@/views/CakePage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: MainPage,
    },
    {
      path: "/cakes/:id",
      name: "CakePage",
      component: CakePage,
    },
  ],
});

export default router;
