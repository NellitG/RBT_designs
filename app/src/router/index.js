import { createRouter, createWebHistory } from "vue-router";
import { HomeView, PostsView, DetailsView, LoginView, PortfolioView, ProcessView, ShopView, ContactView, DestinationView, PicturesView, BookView, LearnView } from "../views";
import { useAuthStore } from "../store";

const routes = [
  { path: "/", name: "home", component: HomeView },
  { path: "/login", name: "login", component: LoginView },
  { path: "/posts", name: "posts", component: PostsView },
  { path: "/posts/:id", name: "details", component: DetailsView, props: true },
  { path:"/portfolio", name:"Portfolio", component: () => import("../views/PortfolioView.vue")},
  {path:"/pictures", name:"pictures", component: () => import("../views/PicturesView.vue")},
  {path:"/process", name:"process", component: () => import("../views/ProcessView.vue")},
  {path:"/shop", name:"Shop", component: () => import("../views/ShopView.vue")},
  {path: "/Contact", name: "contact", component: () => import("../views/ContactView.vue")},
  {path: "/destination", name: "destination", component: () => import("../views/DestinationView.vue")},
  {path: "/book", name: "book", component: () => import("../views/BookView.vue")},
  {path: "/Learn", name: "Learn", component: () => import("../views/LearnView.vue"),}
];

/**Initialize here */
const router = createRouter({ history: createWebHistory(), routes });



export default router;
