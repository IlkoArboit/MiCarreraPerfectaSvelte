<script lang="ts">
  const stats = [
    { value: "250+", label: "Universidades" },
    { value: "1,800+", label: "Carreras listadas" },
    { value: "50K+", label: "Estudiantes orientados" },
    { value: "100%", label: "Gratuito" },
  ];
</script>

<section id="stats" class="py-20 bg-primary-500">
  <div class="container mx-auto px-4">
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-8">
      {#each stats as stat}
        <div class="text-center">
          <p class="text-4xl sm:text-5xl font-mono text-primary-contrast-500">
            {stat.value}
          </p>
          <p class="mt-2 text-sm font-medium text-primary-contrast-500/70">
            {stat.label}
          </p>
        </div>
      {/each}
    </div>
  </div>
</section>
