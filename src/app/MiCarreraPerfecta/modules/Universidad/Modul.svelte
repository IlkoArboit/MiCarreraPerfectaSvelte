<script lang="ts">
  import CampusCard from "./components/CampusCard.svelte";
  import { universities } from "../shared/schemas.svelte";
  import Icon from "./../../../../lib/Icons/Icon.svelte";
  import { onDestroy, onMount } from "svelte";
  import { params } from "svelte-spa-router";
  import { getUniversityById } from "./helpers/helpers.svelte";
  import { Progress } from "@skeletonlabs/skeleton-svelte";
  import type { Universidad } from "../shared/interfaces.svelte";

  let uni: Universidad;
  let unsubscribe;
  let loading: boolean = false;

  async function cargarUniversidad(id: string) {
    if (!id) return;

    uni = await getUniversityById(id);
  }

  unsubscribe = params.subscribe(async ($params) => {
    loading = true;
    await cargarUniversidad($params!.id);

    uni.campus.sort((a, b) => {
      return a.id_campus - b.id_campus;
    });
    loading = false;
  });

  onDestroy(unsubscribe);
</script>

<div class="pt-24 pb-16">
  <div class="container mx-auto px-4">
    <a
      href="#/explorar"
      class="inline-flex items-center gap-1.5 text-sm text-[#6A7981] hover:text-primary-500 transition-colors mb-8"
    >
      <Icon name="ArrowLeft" class="size-4" />
      Volver a universidades
    </a>

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
      <div class="flex flex-col sm:flex-row gap-6 mb-10">
        <div
          class="flex size-20 shrink-0 items-center justify-center rounded-2xl bg-primary-500/10 text-primary-500"
        >
          <Icon name="Building2" class="size-10" />
        </div>
        <div>
          <div class="flex flex-wrap items-center gap-3 mb-1">
            <h1 class="text-3xl sm:text-4xl font-mono">{uni.name}</h1>
            <span
              class="badge {uni.privateManagement
                ? 'preset-filled-primary-800-200'
                : 'preset-filled-tertiary-700-300'}"
              >{uni.privateManagement ? "Privado" : "Público"}</span
            >
          </div>

          <div class="flex flex-wrap gap-4 text-sm text-[#6A7981]">
            <a
              href={uni.campus.find((c) => c.main == 1)?.url}
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-1 hover:text-primary-500 transition-colors"
            >
              <Icon name="Globe" class="size-4" />
              {uni.campus.find((c) => c.main == 1)?.url.replace("https://", "")}
              <Icon name="ExternalLink" class="size-3" />
            </a>
            <span class="flex items-center gap-1"
              ><Icon name="Mail" class="size-4" />{uni.campus.find(
                (c) => c.main == 1,
              )?.email}</span
            >
          </div>
        </div>
      </div>

      <div class="space-y-8">
        {#each uni.campus as c}
          <CampusCard bind:campus={c} />
        {/each}
      </div>
    {/if}
  </div>
</div>
