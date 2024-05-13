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
        path: "/home",
        component: () => import("pages/main/HomePage.vue"),
      },
      {
        path: "/components",
        component: () => import("pages/main/examples/tabs/ComponentsPage.vue"),
      },
      {
        path: "/graphs",
        component: () => import("pages/main/examples/tabs/GraphPage.vue"),
      },
      {
        path: "/weather",
        component: () => import("pages/main/examples/tabs/WeatherPage.vue"),
      },
      {
        path: "/axios",
        component: () => import("pages/main/examples/tabs/AxiosPage.vue"),
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
