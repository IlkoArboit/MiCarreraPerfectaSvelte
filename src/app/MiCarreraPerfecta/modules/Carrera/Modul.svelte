<script lang="ts">
  import Icon from "./../../../../lib/Icons/Icon.svelte";
  import { onDestroy } from "svelte";
  import { params } from "svelte-spa-router";
  import { getCareerById } from "./helpers/helpers.svelte";
  import type { CareerInfo } from "./interfaces/general.svelte";
  import { Progress } from "@skeletonlabs/skeleton-svelte";

  let car: CareerInfo;
  let unsubscribe;
  let loading: boolean = false;

  async function cargarCarrera(id: string) {
    if (!id) return;

    car = await getCareerById(id);
    console.log(car);
  }

  unsubscribe = params.subscribe(async ($params) => {
    loading = true;
    await cargarCarrera($params!.id);

    loading = false;
  });

  onDestroy(unsubscribe);
</script>

<section class="pt-24 pb-16">
  <div class="container mx-auto px-4 max-w-3xl">
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
      <div class="mb-10">
        <span class="badge preset-tonal-secondary">{car.branch}</span>
        <h1
          class="text-3xl sm:text-4xl font-serif text-primary-contrast-950-50"
        >
          {car.name}
        </h1>
        <p class="text-surface-contrast-500">{car.description}</p>
      </div>

      <div class="rounded-xl border border-surface-700 bg-surface-500 p-5 mb-10">
        <div
          class="flex items-center gap-2 text-sm font-medium text-primary-contrast-900-50 mb-8"
        >
          <Icon name="GraduationCap" class="size-4 text-primary-500" /> Detalles
          de la carrera
        </div>
        <dl class="space-y-2 text-sm">
          <div class="flex justify-between">
            <dt class="text-surface-contrast-500">Duración</dt>
            <dd
              class="font-medium text-primary-contrast-900-50 flex items-center gap-1"
            >
              <Icon name="Clock" class="size-3.5" />{car.durationMonths} meses
            </dd>
          </div>
          <div class="flex justify-between">
            <dt class="text-surface-contrast-500">Modalidad</dt>
            <dd
              class="font-medium text-primary-contrast-900-50 flex items-center gap-1"
            >
              <Icon name="Monitor" class="size-3.5" />{car.modality}
            </dd>
          </div>
          <div class="flex justify-between">
            <dt clasS="text-surface-contrast-500">Area</dt>
            <dd class="font-medium text-primary-contrast-900-50">
              {car.branch}
            </dd>
          </div>
        </dl>
      </div>

      <div class="grid gap-4 sm:grid-cols-2 mb-10">
        {#each car.campuses as camp}
          <div class="rounded-xl border border-surface-700 bg-surface-500 p-5">
            <div
              class="flex items-center gap-2 text-sm font-medium text-primary-contrast-900-50 mb-8"
            >
              <Icon name="Building2" class="size-4 text-primary-500" />
              Universidad y campus
            </div>
            <dl class="space-y-2 text-sm">
              <div class="flex justify-between">
                <dt class="text-surface-contrast-500">Universidad</dt>
                <dd class="font-medium text-primary-contrast-900-50">
                  {camp.university.universityName}
                </dd>
              </div>
              <div class="flex justify-between">
                <dt class="text-surface-contrast-500">Campus</dt>
                <dd class="font-medium text-primary-contrast-900-50">
                  {camp.campusName}
                </dd>
              </div>
              <div class="flex justify-between">
                <dt class="text-surface-contrast-500">Ciudad</dt>
                <dd
                  class="font-medium text-primary-contrast-900-50 flex items-center gap-1"
                >
                  <Icon name="MapPin" class="size-3.5" />{camp.campusLocation}
                </dd>
              </div>
            </dl>
          </div>
          <div class="rounded-xl border border-surface-700 bg-surface-500 p-5">
            <div
              class="flex items-center gap-2 text-sm font-medium text-primary-contrast-900-50 mb-8"
            >
              <Icon name="Building2" class="size-4 text-primary-500" />
              Información de contacto
            </div>
            <div class="flex flex-wrap gap-4 text-sm text-surface-contrast-500">
              <span class="flex items-center gap-1"><Icon name="MapPin" class="h-4 w-4" /> {camp.campusLocation}</span>
              <span class="flex items-center gap-1"><Icon name="Mail" class="h-4 w-4" /> {camp.campusEmail}</span>
              <a href={camp.campusUrl} target="_blank" rel="noopener noreferrer" class="flex items-center gap-1 hover:text-primary-500 transition-colors">
                <Icon name="Globe" class="h-4 w-4" /> {camp.campusUrl.replace("https://", "")}
              </a>
            </div>
          </div>
        {/each}
      </div>
    {/if}
  </div>
</section>
