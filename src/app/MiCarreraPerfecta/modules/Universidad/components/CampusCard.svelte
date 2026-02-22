<script lang="ts">
	import Icon from './../../../../../lib/Icons/Icon.svelte';
  import CarreraCard from "./CarreraCard.svelte";
  import type { Campus } from "../../shared/interfaces.svelte";

  export let campus: Campus;
  let open: boolean = false;

  const toggleOpen = () => {
    open = !open;
  };
</script>

<section class="rounded-xl border border-[#E5E2DC] overflow-hidden">
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div on:click={toggleOpen} class="bg-secondary-500/50 p-6 border-b border-[#E5E2DC] flex justify-between items-center">
    <div>
      <h2
        class="text-xl font-mono text-primary-contrast-50 flex items-center gap-2"
      >
        <Icon name="Building2" class="size-5 text-primary-500" />
        {campus.name}
      </h2>
      <div class="flex flex-wrap gap-4 mt-2 text-sm text-surface-contrast-500">
        <span class="flex items-center gap-1 capitalize">
          <Icon name="MapPin" />{campus.location}
        </span>
        <span class="flex items-center gap-1">
          <Icon name="GraduationCap" />{campus.careersCount} carreras
        </span>
      </div>
    </div>
    <span>
      <button on:click={toggleOpen}><Icon name="ChevronDown" class="size-6 {open ? "rotate-180" : ""} transition-all" /></button>
    </span>
  </div>


  <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 {open ? "p-6 " : "h-0 invisible p-0"} transition-all duration-300">
    {#each campus.careers as career}
      <CarreraCard {career} />
    {/each}
  </div>
</section>
