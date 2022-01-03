import { createWebHistory, createRouter } from "vue-router";

import Index from "@/pages/Index.vue";
import Single from "@/pages/Single.vue";
import Contact from "@/pages/Contact.vue";
import NotFound404 from "@/pages/NotFound404.vue";

const routes = [
    {
        path: "/",
        name: "Index",
        component: Index,
    },
    {
        path: "/blog",
        name: "Blog",
        component: Index,
    },
    {
        path: "/blog/:slug",
        name: "Single",
        component: Single,
    },
    {
        path: "/contact",
        name: "Contact",
        component: Contact,
    },
    {
        path: "/:catchAll(.*)",
        component: NotFound404,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;