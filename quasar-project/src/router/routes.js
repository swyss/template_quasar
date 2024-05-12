const routes = [
  {
    path: "/",
    // We point it to our component
    // where we defined our QLayout
    component: () => import("layouts/MainLayout.vue"),
    // Now we define the sub-routes.
    // These are getting injected into
    // layout (from above) automatically
    // by using <router-view> placeholder
    // (need to specify it in layout)
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      { path: "/hello", component: () => import("pages/main/HelloPage.vue") },
      {
        path: "/components",
        component: () => import("pages/main/examples/componentsPage.vue"),
      },
      {
        path: "/graphs",
        component: () => import("pages/main/examples/graphPage.vue"),
      },
      {
        path: "/weather",
        component: () => import("pages/main/examples/weatherPage.vue"),
      },
      {
        path: "/axios",
        component: () => import("pages/main/examples/axiosPage.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/error/ErrorNotFound.vue"),
  },
];

export default routes;
