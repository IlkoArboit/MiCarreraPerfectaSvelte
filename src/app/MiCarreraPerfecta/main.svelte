<script lang="ts">
  import Router from "svelte-spa-router";
  import routes from "./routes.svelte";
  export let prefix: string;
</script>

<main><Router {prefix} {routes} /></main>
