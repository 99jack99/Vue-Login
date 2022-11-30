import { createRouter, createWebHistory } from "vue-router";

import { useAuthStore } from "./Store/AuthStore";

const Home = () => import("./pages/Home.vue");
const Login = () => import("./pages/Login.vue");
const Signup = () => import("./pages/Signup.vue");
const Profile = () => import("./pages/Profile.vue");

const routes = [
  { path: "/", component: Home },
  { path: "/login", component: Login },
  { path: "/signup", component: Signup },
  { path: "/profile", component: Profile},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from) => {
    const authStore = useAuthStore();

    const publicPage = ['/login','/signup'];
    const requiredAuth = !publicPage.includes(to.path);

    if (!authStore.isLogged && requiredAuth) {
        return '/login';
    }
});

export default router;
