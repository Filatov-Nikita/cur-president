import Routes3D from "./3D";

const routes = [
  {
    path: "/",
    beforeEnter(from, to, next) {
      next({ name: "TW" });
    }
  },

  {
    path: "/tw",
    component: () => import("layouts/MainLayout.vue"),
    redirect: { name: "main" },
    name: "TW",
    children: [
      { path: "/", component: () => import("src/pages/Main.vue"), name: "main" }
    ]
  },

  {
    path: "",
    component: () => import("layouts/Statistics/index.vue"),
    children: [
      { path: "/tw/nas", component: () => import("src/pages/Nas.vue") },
      {
        path: "/tw/lifespan",
        component: () => import("src/pages/Lifespan.vue")
      },
      { path: "/tw/zp", component: () => import("src/pages/ZP.vue") }
    ]
  },

  ...Routes3D,

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("pages/Error404.vue")
  }
];

export default routes;
