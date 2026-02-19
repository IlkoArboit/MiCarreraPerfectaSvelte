<script lang="ts">
  import Icon from "./../../../../../lib/Icons/Icon.svelte";
  const features = [
    {
      icon: "Search",
      title: "Buscador de Carreras",
      description:
        "Filtra por área de interés, duración, modalidad y más para encontrar tu carrera ideal.",
    },
    {
      icon: "GraduationCap",
      title: "Perfil Universitario",
      description:
        "Compara universidades con información detallada sobre planes de estudio y requisitos.",
    },
    {
      icon: "Compass",
      title: "Test Vocacional",
      description:
        "Descubre tus fortalezas e intereses con herramientas de orientación profesional.",
    },
    {
      icon: "BookOpen",
      title: "Guías y Recursos",
      description:
        "Accede a artículos, videos y consejos para prepararte para la vida universitaria.",
    },
    {
      icon: "Users",
      title: "Experiencias Reales",
      description:
        "Lee testimonios de estudiantes que ya pasaron por el proceso de elección.",
    },
    {
      icon: "Lightbulb",
      title: "Orientación Personalizada",
      description:
        "Recibe recomendaciones basadas en tu perfil académico y tus intereses.",
    },
  ] as const;
</script>

<section id="explorar" class="py-24 bg-secondary-500">
  <div class="container mx-auto px-4">
    <div class="text-center max-w-2xl mx-auto mb-16">
      <span
        class="text-sm font-semibold text-primary-500 uppercase tracking-wider"
      >
        ¿Qué ofrecemos?
      </span>
      <h2 class="mt-3 text-3xl sm:text-4xl font-mono text-[#172126]">
        Todo lo que necesitas para decidir tu futuro
      </h2>
      <p class="mt-4 text-muted-foreground">
        Herramientas diseñadas para ayudarte a explorar, comparar y elegir con
        confianza.
      </p>
    </div>

    <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {#each features as feature}
        <div
          class="group rounded-xl bg-white p-8 shadow-sm border border-[#E5E2DC] hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
        >
          <div
            class="flex size-12 items-center justify-center rounded-lg bg-primary-500/10 text-primary-500 mb-5 group-hover:bg-primary-500 group-hover:text-primary-contrast-500 transition-colors"
          >
            <Icon name={feature.icon} class="size-6" />
          </div>
          <h3 class="text-lg font-semibold text-[#172126]">
            {feature.title}
          </h3>
          <p class="mt-2 text-sm text-[#6A7981] leading-relaxed">
            {feature.description}
          </p>
        </div>
      {/each}
    </div>
  </div>
</section>
