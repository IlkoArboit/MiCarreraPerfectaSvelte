<script lang="ts">
  import Body from "./base/Body.svelte";
  import Footer from "./base/Footer.svelte";
  import Header from "./base/Header.svelte";
</script>

<main>
  <div class="w-screen max-w-screen overflow-y-auto h-screen max-h-screen flex flex-col">
    <Header />
    <Body />
    <Footer />
  </div>
</main>

<style>
</style>
