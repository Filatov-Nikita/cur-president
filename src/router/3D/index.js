export default [
  {
    path: "/3d/district/:id/branches/economic",
    component: () => import("src/3D/layouts/MainLayout/index.vue"),
    name: "3D.branches.economic",
    children: [
      {
        path: "new",
        component: () => import("src/3D/pages/Branches/Economic/New/index.vue"),
        name: "3D.branches.new-economic",
        props: true
      },
      {
        path: "obes",
        component: () => import("src/3D/pages/Branches/Economic/Obes.vue"),
        name: "3D.branches.economic.obes",
        props: true
      },
      {
        path: "invest",
        component: () => import("src/3D/pages/Branches/Economic/Invest.vue"),
        name: "3D.branches.economic.invest",
        props: true
      },
      {
        path: "invest/companies",
        component: () =>
          import("src/3D/pages/Branches/Economic/InvestCompanies.vue"),
        name: "3D.branches.economic.invest.companies",
        props: true
      },
      {
        path: "transport",
        component: () => import("src/3D/pages/Branches/Economic/Transport.vue"),
        name: "3D.branches.economic.transport",
        props: true
      }
    ]
  },
  {
    path: "/3d",
    component: () => import("src/3D/layouts/MainLayout/index.vue"),
    redirect: { name: "3D.main" },
    name: "3D",
    children: [
      {
        path: "d1",
        component: () => import("src/3D/pages/Drafts/D1.vue")
      },
      {
        path: "home",
        component: () => import("src/3D/pages/Main.vue"),
        name: "3D.main"
      },
      {
        path: "district/:id",
        component: () => import("src/3D/pages/Districts/ShowDistrict.vue"),
        name: "3D.show.district",
        props: true
      },
      {
        path: "district/:id/branches/roads",
        component: () => import("src/3D/pages/Branches/Roads/Main.vue"),
        name: "3D.branches.roads",
        props: true
      },
      {
        path: "district/:id/branches/ur-help",
        component: () => import("src/3D/pages/Branches/UrHelp/UrHelpMain.vue"),
        name: "3D.branches.ur-help",
        props: true
      },
      {
        path: "district/:id/branches/ur-help/centers/map",
        component: () =>
          import("src/3D/pages/Branches/UrHelp/UrHelpCentersMap.vue"),
        name: "3D.branches.ur-help.centers.map",
        props: true
      },
      {
        path: "district/:id/branches/ur-help/centers",
        component: () =>
          import("src/3D/pages/Branches/UrHelp/UrHelpCenters.vue"),
        name: "3D.branches.ur-help.centers",
        props: true
      },
      {
        path: "district/:id/branches/ur-help/centers/:center_id",
        component: () =>
          import("src/3D/pages/Branches/UrHelp/UrHelpShowCenter.vue"),
        name: "3D.branches.ur-help.show.center",
        props: true
      },
      {
        path: "district/:id/branches/building",
        component: () => import("src/3D/pages/Branches/Building/Main.vue"),
        name: "3D.branches.building",
        props: true
      },
      {
        path: "district/:id/branches/building/objects",
        component: () =>
          import("src/3D/pages/Branches/Building/BuildingObjects.vue"),
        name: "3D.branches.building.objects",
        props: true
      },
      {
        path: "district/:id/branches/building/objects/:object_id",
        component: () =>
          import("src/3D/pages/Branches/Building/BuildingShowObject.vue"),
        name: "3D.branches.building.show.object",
        props: true,
        meta: {
          menuBack: "3D.branches.building.objects"
        }
      },
      {
        path: "map-items",
        component: () => import("src/3D/pages/MapItems.vue"),
        name: "3D.map-items",
        props: true
      },
      {
        path: "map-location",
        component: () => import("src/3D/pages/MapLocation/MapLocationMain.vue"),
        name: "3D.map-location.main"
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
