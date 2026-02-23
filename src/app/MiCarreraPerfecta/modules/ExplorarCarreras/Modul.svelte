<script lang="ts">
  import Icon from "./../../../../lib/Icons/Icon.svelte";
  import { onDestroy, onMount } from "svelte";
  import type { Career } from "../shared/interfaces.svelte";
  import { getCareers } from "./helpers/helpers.svelte";
  import { params } from "svelte-spa-router";
  import Input from "../../../../lib/input/Input.svelte";
  //@ts-ignore
  import { branchesSchema } from "../MainView/schemas/general.svelte";
  import { Progress } from "@skeletonlabs/skeleton-svelte";

  let carreras: Career[] = [];
  let carrerasFiltradas: Career[] = [];
  let branches = branchesSchema;
  let activeBranches: number[] = [];
  let unsubscribe;
  let loading: boolean = false;

  async function cargarCarreras() {
    carreras = await getCareers();
  }

  const toggleBrachSelection = (id: number) => {
    activeBranches = activeBranches.includes(id)
      ? activeBranches.filter((n) => n != id)
      : activeBranches.concat(id);

    carrerasFiltradas = carreras.filter((c) =>
      activeBranches.includes(c.branch_id),
    );
  };

  onMount(async () => {
    loading = true;
    carreras = await getCareers();
    loading = false;
  });

  $: query = "";
</script>

<div class="pt-24 pb-16">
  <div class="container mx-auto px-4">
    <div class="max-w-2xl mb-12">
      <span
        class="text-sm font-semibold text-tertiary-500 uppercase tracking-wider"
      >
        Explorar
      </span>
      <h1 class="mt-2 text-3xl sm:text-4xl font-mono text-black">Carreras</h1>
      <p class="mt-3 text-[#6A7981]">
        Busca entre todas las carreras disponibles y filtra por área de interés.
      </p>
    </div>

    <div class="relative mb-6 max-w-lg">
      <Icon
        name="Search"
        class="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-surface-contrast-500"
      />
      <Input
        type="text"
        value={query}
        placeholder="Buscar carrera..."
        style="pl-10"
      />
    </div>

    <div class="flex flex-wrap gap-2 mb-8">
      {#each branches as branch, i}
        <button
          on:click={() => toggleBrachSelection(branch.id)}
          class="rounded-full px-4 py-1.5 text-sm font-medium border transition-colors {activeBranches.includes(
            branch.id,
          )
            ? 'preset-filled-primary-500'
            : 'preset-outlined-primary-500 hover:border-primary-500/40'}"
        >
          {branch.name}
        </button>
      {/each}
      {#if activeBranches.length !== 0}
        <button
          on:click={() => (activeBranches = [])}
          class="btn preset-filled-tertiary-500 rounded-full"
          >Limpiar filtros</button
        >
      {/if}
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
    {:else if carrerasFiltradas.length !== 0}
      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {#each carrerasFiltradas as carrera}
          <a
            href="#/carreras/{carrera.id}"
            class="group rounded-xl border border-[#E5E2DC] bg-surface-500 p-5 hover:border-primary-500/40 hover:shadow-md transition-all"
          >
            <span class="badge preset-filled-secondary-500"
              >{carrera.branch}</span
            >
            <h3
              class="text-lg font-sans text-surface-contrast-800-200 group-hover:text-primary-500 transition-colors"
            >
              {carrera.name}
            </h3>
            <p class="text-sm text-surface-contrast-700-300 line-clamp-2 mb-4">
              {carrera.description}
            </p>
            <div
              class="flex flex-wrap gap-3 text-xs text-surface-contrast-700-300"
            >
              <span class="flex items-center gap-1">
                <Icon name="Building2" class="size-3.5" />
                Universidad
              </span>
              <span class="flex items-center gap-1">
                <Icon name="Clock" class="size-3.5" />
                {carrera.duration_months} meses
              </span>
              <span class="flex items-center gap-1">
                <Icon name="Monitor" class="size-3.5" />
                {carrera.modality}
              </span>
            </div>
          </a>
        {/each}
      </div>
    {:else}
      <div class="text-center py-16 text-surface-contrast-500">
        <Icon name="GraduationCap" class="size-12 mx-auto mb-4 opacity-40" />
        <p class="text-lg font-medium">No se encotraron carreras</p>
        <p class="text-sm mt-1">
          Intenta con otro término o limpia los filtros
        </p>
      </div>
    {/if}
  </div>
</div>
