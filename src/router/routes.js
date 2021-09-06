import Routes3D from "./3D";
import VideoMessRoutes from "./video-messages";

const routes = [
  {
    path: "/",
    component: () => import("src/pages/Main.vue"),
    name: "main"
  },

  {
    path: "/tw",
    component: () => import("layouts/MainLayout.vue"),
    name: "tw",
    redirect: { name: "tw.main" },
    children: [
      {
        path: "main",
        component: () => import("src/pages/20Indicators/Main.vue"),
        name: "tw.main"
      }
    ]
  },

  {
    path: "/tw",
    component: () => import("layouts/Statistics/index.vue"),
    children: [
      {
        path: "nas",
        component: () => import("src/pages/20Indicators/Nas.vue")
      },
      {
        path: "lifespan",
        component: () => import("src/pages/20Indicators/Lifespan.vue")
      },
      { path: "zp", component: () => import("src/pages/20Indicators/ZP.vue") },
      {
        path: "vlast-dov",
        component: () => import("src/pages/20Indicators/VlastDov.vue")
      },
      {
        path: "bed",
        component: () => import("src/pages/20Indicators/Bed.vue")
      },
      {
        path: "bis",
        component: () => import("src/pages/20Indicators/Bis.vue")
      },
      {
        path: "doh",
        component: () => import("src/pages/20Indicators/Doh.vue")
      },
      {
        path: "dor",
        component: () => import("src/pages/20Indicators/Dor.vue")
      },
      {
        path: "edu",
        component: () => import("src/pages/20Indicators/Edu.vue")
      },
      {
        path: "gar",
        component: () => import("src/pages/20Indicators/Gar.vue")
      },
      {
        path: "gor",
        component: () => import("src/pages/20Indicators/Gor.vue")
      },
      {
        path: "inv",
        component: () => import("src/pages/20Indicators/Inv.vue")
      },
      {
        path: "kul",
        component: () => import("src/pages/20Indicators/Kul.vue")
      },
      {
        path: "okr",
        component: () => import("src/pages/20Indicators/Okr.vue")
      },
      {
        path: "sport",
        component: () => import("src/pages/20Indicators/Sport.vue")
      },
      {
        path: "str",
        component: () => import("src/pages/20Indicators/Str.vue")
      },
      {
        path: "vol",
        component: () => import("src/pages/20Indicators/Vol.vue")
      },
      {
        path: "zhl",
        component: () => import("src/pages/20Indicators/Zhl.vue")
      },
      {
        path: "tal",
        component: () => import("src/pages/20Indicators/Tal.vue")
      },
      { path: "cif", component: () => import("src/pages/20Indicators/Cif.vue") }
    ]
  },

  ...Routes3D,
  ...VideoMessRoutes,
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("src/pages/20Indicators/Error404.vue")
  }
];

export default routes;
