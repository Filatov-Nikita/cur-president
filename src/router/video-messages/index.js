export default [
  {
    path: "/videomess",
    component: () => import("src/VideoMessages/layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("src/VideoMessages/pages/Main.vue"),
        name: "videomess.main"
      },
      {
        path: "branch/:branchName",
        component: () => import("src/VideoMessages/pages/BranchShow.vue"),
        name: "videomess.branch.show"
      }
    ]
  }
];
