import VideoMessRoutes from "./video-messages";

const routes = [
  {
    path: "/auth",
    component: () => import("src/layouts/AuthLayout.vue"),
    children: [
      {
        path: "/login",
        component: () => import("src/pages/Auth/AuthLogin.vue"),
        name: "auth.login"
      },
      {
        path: "/confirm-email",
        component: () => import("src/pages/Auth/AuthConfirmEmail.vue"),
        name: "auth.confirm-email"
      },
      {
        path: "/reset-password",
        component: () => import("src/pages/Auth/AuthResetPassword.vue"),
        name: "auth.reset-password"
      }
    ]
  },

  ...VideoMessRoutes,
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("src/pages/20Indicators/Error404.vue")
  }
];

export default routes;
