const routes = [
  {
    path: "/",
    component: () => import("layouts/PublicLayout.vue"),
    children: [
      { path: "", component: () => import("pages/Pokedex/pokemons.vue") },
      // { path: "login", component: () => import("pages/HomeWeb") },
      // { path: "register", component: () => import("pages/HomeWeb") },

    ]
  },
  //ruta internas del sistema
  // {
  //   path: "/app",
  //   component: () => import("layouts/MainLayout"),
  //   children: [
  //     {
  //       path: "users",
  //       component: () => import("pages/Users/users.vue")
  //     },
  //   ]
  // },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("pages/Error404.vue")
  }
];

export default routes;
