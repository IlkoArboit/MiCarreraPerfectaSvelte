<script lang="ts">
  import { onMount } from "svelte";
  import UniversityCard from "./components/UniversityCard.svelte";
  import { getUniversitiesCards } from "./helpers/helpers.svelte";
  import { Progress } from "@skeletonlabs/skeleton-svelte";
  import type { UniCard } from "./interfaces/general.svelte";

  let loading: boolean = false;
  let datos: UniCard[] = [];
  onMount(async () => {
    loading = true;
    let data = await getUniversitiesCards();
    datos = data;
    loading = false;
  });
</script>

<div class="pt-24 pb-16">
  <div class="container mx-auto px-4">
    <div class="max-w-2xl mb-12">
      <span
        class="text-sm font-semibold text-tertiary-500 uppercase tracking-wider"
      >
        Explorar
      </span>
      <h1 class="mt-2 text-3xl sm:text-4xl font-mono text-black">
        Universidades
      </h1>
      <p class="mt-3 text-[#6A7981]">
        Descubre las principales universidades, sus campus y la oferta académica
        disponible.
      </p>
    </div>

    {#if loading}
      <div class="flex w-full justify-center">
        <Progress class="items-center w-fit p-0 animate-spin" value={null}>
          <Progress.Circle>
            <Progress.CircleTrack />
            <Progress.CircleRange />
          </Progress.Circle>
        </Progress>
      </div>
    {:else}
      <div class="grid gap-6">
        {#each datos as uni}
          <UniversityCard bind:uni />
        {/each}
      </div>
    {/if}
  </div>
</div>
