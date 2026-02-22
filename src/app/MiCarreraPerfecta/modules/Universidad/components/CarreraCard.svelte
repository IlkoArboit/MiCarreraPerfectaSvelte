<script lang="ts">
  import Icon from "../../../../../lib/Icons/Icon.svelte";
  import type { Career } from "../../shared/interfaces.svelte";

  export let career: Career;
</script>

<a
  href="#/carreras/{career.id}"
  class="group card rounded-lg border border-[#E5E2DC] p-4 hover:border-primary-500/40 hover:shadow-md transition-all"
>
  <h3
    class="font-semibold text-primary-contrast-50 group-hover:text-primary-500 transition-colors mb-1"
  >
    {career.name}
  </h3>
  <div class="flex flex-wrap gap-2 mb-2">
    <span class="badge preset-filled-secondary-500">{career.branch}</span>
  </div>
  <div class="flex gap-3 text-xs text-primary-contrast-50">
    <span class="flex items-center gap-1">
      <Icon name="Clock" class="size-3" />
      {career.duration_months} meses
    </span>
    <!-- <span class="flex items-center gap-1">
      <Icon name="BookOpen" class="size-3" />
      {career.}
    </span> -->
  </div>
</a>
