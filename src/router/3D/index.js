export default [
  {
    path: "/3d",
    component: () => import("src/3D/layouts/MainLayout/index.vue"),
    redirect: { name: "3D.main" },
    name: "3D",
    children: [
      {
        path: "home",
        component: () => import("src/3D/pages/Main.vue"),
        name: "3D.main"
      },
      {
        path: "map-items",
        component: () => import("src/3D/pages/MapItems.vue"),
        name: "3D.map-items"
      },
      {
        path: "map-location",
        component: () => import("src/3D/pages/MapLocation/MapLocationMain.vue"),
        name: "3D.map-location.main"
      },
      {
        path: "map-location/branch",
        component: () =>
          import("src/3D/pages/MapLocation/MapLocationBranch.vue"),
        name: "3D.map-location.branch"
      },
      {
        path: "map-location/slides/fire",
        component: () =>
          import("src/3D/pages/MapLocation/Slides/MapLocationCHS.vue"),
        name: "3D.map-location.slides.fire"
      },
      {
        path: "map-location/slides/building",
        component: () =>
          import("src/3D/pages/MapLocation/Slides/MapLocationBuilding.vue"),
        name: "3D.map-location.slides.building"
      },
      {
        path: "map-location/slides/school",
        component: () =>
          import("src/3D/pages/MapLocation/Slides/MapLocationSchool.vue"),
        name: "3D.map-location.slides.school"
      }
    ]
  },
  {
    path: "/soc",
    component: () => import("src/3D/layouts/SimpleLayout.vue"),
    redirect: { name: "soc.main" },
    name: "soc",
    children: [
      {
        path: "/soc/main",
        component: () => import("src/3D/pages/SocCommunication/index.vue"),
        name: "soc.main"
      }
    ]
  }
];
