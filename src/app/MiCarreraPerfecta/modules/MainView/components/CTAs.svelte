<script lang="ts">
  import Icon from "./../../../../../lib/Icons/Icon.svelte";
</script>

<section id="recursos" class="py-24 bg-secondary-500">
  <div class="container mx-auto px-4">
    <div
      class="rounded-2xl bg-primary-500 p-12 sm:p-16 text-center max-w-4xl mx-auto"
    >
      <h2 class="text-3xl sm:text-4xl font-mono text-primary-contrast-500">
        ¿Listo para descubrir tu vocación?
      </h2>
      <p class="mt-4 text-primary-contrast-500/80 max-w-lg mx-auto">
        Comienza a explorar las mejores opciones académicas de forma totalmente
        gratuita. Sin registro, sin complicaciones.
      </p>
      <div class="mt-8 flex flex-wrap justify-center gap-4">
        <a
          href="http://localhost:5678/form/TestForm"
          class="inline-flex items-center gap-2 rounded-lg bg-tertiary-500 px-8 py-3.5 text-sm font-bold text-tertiary-contrast-500 hover:opacity-90 transition-opacity"
        >
          Comenzar ahora <Icon name="ArrowLeft" class="size-4 rotate-180" />
        </a>
      </div>
    </div>
  </div>
</section>
