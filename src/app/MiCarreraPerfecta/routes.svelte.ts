import wrap from "svelte-spa-router/wrap";

const routes = {
  "/": wrap({
    //@ts-ignore
    asyncComponent: () => import("./Modules/MainView/Modul.svelte"),
  }),
  "/explorar": wrap({
    //@ts-ignore
    asyncComponent: () => import("./modules/ExplorarUnis/Modul.svelte"),
  }),
  "/universidades/:id": wrap({
    //@ts-ignore
    asyncComponent: () => import("./modules/Universidad/Modul.svelte"),
  }),
};

export default routes;
