<script lang="ts">
  import { onMount } from "svelte";
  import Icon from "./../../../../../lib/Icons/Icon.svelte";
  import { getBranches } from "../helpers/helpers.svelte";
  //@ts-ignore
  import { branchesSchema } from "../schemas/general.svelte";

  onMount(async () => {});
  let branches = branchesSchema;
</script>

<section id="carreras" class="py-24">
  <div class="container mx-auto px-4">
    <div class="text-center max-w-2xl mx-auto mb-16">
      <span
        class="text-sm font-semibold text-tertiary-500 uppercase tracking-wider"
      >
        Áreas de estudio
      </span>
      <h2 class="mt-3 text-3xl sm:text-4xl font-mono text-[#172126]">
        Explora por area de interés
      </h2>
      <p class="mt-4 text-[#6A7981]">
        Navega entre las principales áreas del conocimiento y encuentra la que
        más se aliena contigo.
      </p>
    </div>

    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {#each branches as branch}
        <a
        href="#/carreras/branch/{branch.id}"
          class="group flex flex-col items-center gap-3 rounded-xl border border-[#E5E2DC] bg-surface-500 p-6 text-center hover:border-primary-500/40 hover:shadow-md transition-all cursor-pointer"
        >
          <div
            class="flex size-14 items-center justify-center rounded-full bg-tertiary-500/15 text-tertiary-500 group-hover:bg-tertiary-500 group-hover:text-tertiary-contrast-500 transition-colors"
          >
            <Icon name={branch.icon} class="size-7" />
          </div>
          <h3 class="text-sm font-semibold text-[#172126]">
            {branch.name}
          </h3>
          <!-- <span class="text-xs text-[#6A7981]">
            {branch.count} carreras
          </span> -->
        </a>
      {/each}
    </div>
  </div>
</section>
