import { createRouter, createWebHistory } from "vue-router";
import FilmsMarketView from "@/views/FilmsMarketView.vue";
import FavoriteFilmsView from "@/views/FavoriteFilmsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "favorite",
      component: FavoriteFilmsView,
    },
    {
      path: "/about",
      name: "market",
      component: FilmsMarketView,
    },
  ],
});

export default router;
