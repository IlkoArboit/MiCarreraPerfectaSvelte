<script lang="ts">
    import herobg from "../../../../../assets/hero-campus.jpg";
  import Icon from "../../../../../lib/Icons/Icon.svelte";
</script>

<section
  id="hero"
  class="relative min-h-[90dvh] flex items-center overflow-hidden"
>
  <div class="absolute inset-0">
    <img
      src={herobg}
      alt="Estudiantes caminando por un campus universitario"
      class="w-full h-full object-cover"
      loading="eager"
    />
    <div
      class="absolute inset-0 bg-linear-to-r from-[#17212680] via-[#17212660] to-[#17212630]"
    ></div>
  </div>

  <div class="container relative z-10 mx-auto px-4 py-32">
    <div class="max-w-2xl space-y-6">
        <span class="inline-block rounded-full bg-tertiary-500/20 px-4 py-1.5 text-sm font-medium text-tertiary-500">
            100% gratuito y abierto
        </span>
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-mono text-primary-contrast-50-950 leading-tight ">
            Tu futuro academico empieza aquí
        </h1>
        <p class="text-lg text-surface-500/80 max-w-lg">
            Explora carreras, compara universidades y descubre la orientación que necesitas para tomar la mejor decisión de tu vida.
        </p>
        <div class="flex flex-wrap gap-4">
            <a class="inline-flex items-center gap-2 rounded-lg bg-primary-500 px-6 py-3 text-sm font-semibold text-primary-contrast-500 hover:bg-primary-500/80 transition-all duration-200" href="#explorar">Explorar carreras <Icon name="ArrowLeft" class="size-5 rotate-180" /></a>
            <a class="inline-flex items-center gap-2 rounded-lg border border-primary-contrast-500/30 px-6 py-3 text-sm font-semibold text-primary-contrast-500 hover:bg-primary-contrast-500/10 transition-colors" href="#recursos">Ver recursos</a>
        </div>
    </div>
  </div>
</section>
