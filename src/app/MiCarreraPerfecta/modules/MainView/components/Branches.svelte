<script lang="ts">
	import Icon from './../../../../../lib/Icons/Icon.svelte';

  const branches = [
  { icon: "Stethoscope", name: "Ciencias de la Salud", count: 120 },
  { icon: "Code", name: "Tecnología e Ingeniería", count: 230 },
  { icon: "Scale", name: "Derecho y Ciencias Sociales", count: 95 },
  { icon: "Palette", name: "Arte y Diseño", count: 80 },
  { icon: "FlaskConical", name: "Ciencias Exactas", count: 110 },
  { icon: "Building2", name: "Negocios y Administración", count: 180 },
  { icon: "Leaf", name: "Medio Ambiente", count: 65 },
  { icon: "Calculator", name: "Economía y Finanzas", count: 90 },
] as const;
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
        <div
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
        <span class="text-xs text-[#6A7981]">
            {branch.count} carreras
        </span>
        </div>
      {/each}
    </div>
  </div>
</section>
