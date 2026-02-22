<script lang="ts">
  import { onMount } from "svelte";
  //@ts-ignore
  import { getStats } from "../helpers/helpers.svelte";

  let stats: { value: string; label: string }[] = [];

  onMount(async () => {
    let data = await getStats();
    stats = data;
  });
</script>

<section id="stats" class="py-20 bg-primary-500">
  <div class="container mx-auto px-4">
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-8">
      {#each stats as stat}
        <div class="text-center">
          <p class="text-4xl sm:text-5xl font-mono text-primary-contrast-500">
            {stat.value}
          </p>
          <p class="mt-2 text-sm font-medium text-primary-contrast-500/70">
            {stat.label}
          </p>
        </div>
      {/each}
    </div>
  </div>
</section>
