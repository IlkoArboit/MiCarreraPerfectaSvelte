import wrap from "svelte-spa-router/wrap";

const routes = {
  "/": wrap({
    //@ts-ignore
    asyncComponent: () => import("./Modules/MainView/Modul.svelte"),
  }),
};

export default routes;
