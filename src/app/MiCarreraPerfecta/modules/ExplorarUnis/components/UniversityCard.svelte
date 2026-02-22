<script lang="ts">
  import Icon from "../../../../../lib/Icons/Icon.svelte";
  import type { UniCard } from "../interfaces/general.svelte";

  export let uni: UniCard;
</script>

<a
  href="/#/universidades/{uni.id}"
  class="group flex flex-col sm:flex-row gap-6 rounded-xl border border-[#E5E2DC] bg-surface-500 p-6 hover:border-primary-500/40 hover:shadow-lg transition-all"
>
  <div
    class="flex size-16 shrink-0 items-center justify-center rounded-xl bg-primary-500/10 text-primary-500"
  >
    <Icon name="Building2" class="size-8" />
  </div>
  <div class="flex-1 min-w-0">
    <div class="flex flex-wrap items-center gap-2 mb-1">
      <h2
        class="text-xl font-mono text-surface-contrast-500 group-hover:text-primary-500 transition-colors"
      >
        {uni.name}
      </h2>
      <span
        class="badge {uni.privateManagement
          ? 'preset-filled-primary-800-200'
          : 'preset-filled-tertiary-700-300'}"
      >
        {uni.privateManagement ? "Privada" : "Pública"}
      </span>
    </div>

    <div class="flex flex-wrap gap-4 text-xs text-[#6A7981]">
      <span class="flex items-center gap-1">
        <Icon name="MapPin" class="size-3.5" />
        {uni.location}
      </span>
      <span class="flex items-center gap-1">
        <Icon name="Building2" class="size-3.5" />
        {uni.campusCount} campus
      </span>
      <span class="flex items-center gap-1">
        <Icon name="GraduationCap" class="size-3.5" />
        {uni.careersCount} carreras
      </span>
      <span class="flex items-center gap-1">
        <Icon name="Globe" class="size-3.5" />
        {uni.website}
      </span>
    </div>
  </div>

  <div
    class="hidden sm:flex items-center text-[#6A7981] group-hover:text-primary-500 transition-colors"
  >
    <Icon name="ArrowLeft" class="size-5 rotate-180" />
  </div>
</a>
