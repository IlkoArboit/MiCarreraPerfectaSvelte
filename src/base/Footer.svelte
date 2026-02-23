<script lang="ts">
  import Icon from "./../lib/Icons/Icon.svelte";
</script>

<footer id="contacto" class="bg-[#172126] py-16">
  <div class="container mx-auto px-4">
    <div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
      <div>
        <a
          class="flex items-center gap-2 text-surface-500 font-bold text-lg"
          href="/"
          ><Icon name="GraduationCap" class="size-6" />MiCarreraPerfecta</a
        >
        <p class="mt-3 text-sm text-surface-500/60 leading-relaxed">
          Plataforma gratuita de orientacion académica y exploracion
          universitaria.
        </p>
      </div>

      <div>
        <h4 class="text-sm font-semibold text-surface-500 mb-4 font-sans">
          Explorar
        </h4>
        <ul class="space-y-2 text-sm text-surface-500/60">
          <li>
            <a href="#carreras" class="hover:text-surface-500 transition-colors"
              >Carreras</a
            >
          </li>
          <li>
            <a href="#/explorar" class="hover:text-surface-500 transition-colors"
              >Universidades</a
            >
          </li>
          <li>
            <a href="http://localhost:5678/form/MiCarreraPerfecta/Test/" class="hover:text-surface-500 transition-colors"
              >Test Vocacional</a
            >
          </li>
        </ul>
      </div>

      <div>
        <h4 class="text-sm font-semibold text-surface-500 mb-4">Recursos</h4>
        <ul class="space-y-2 text-sm text-surface-500/60">
          <li>
            <a href="#carreras" class="hover:text-surface-500 transition-colors"
              >Guias</a
            >
          </li>
          <li>
            <a href="#explorar" class="hover:text-surface-500 transition-colors"
              >Blog</a
            >
          </li>
          <li>
            <a href="#recursos" class="hover:text-surface-500 transition-colors"
              >Preguntas frecuentes</a
            >
          </li>
        </ul>
      </div>
      <div>
        <h4 class="text-sm font-semibold text-surface-500 mb-4">Contacto</h4>
        <ul class="space-y-2 text-sm text-surface-500/60">
          <li>
            <a href="#carreras" class="hover:text-surface-500 transition-colors"
              >ilkoarboit@gmail.com</a
            >
          </li>
          <li>
            <a href="#explorar" class="hover:text-surface-500 transition-colors"
              >Terminos de uso</a
            >
          </li>
          <li>
            <a href="#recursos" class="hover:text-surface-500 transition-colors"
              >Política de privacidad</a
            >
          </li>
        </ul>
      </div>
    </div>
    <div class="mt-12 pt-8 border-t border-surface-500/10 text-center text-xs text-surface-500/40">
        © {new Date().getFullYear()} MiCarreraPerfecta. Todos los derechos reservados.
      </div>
  </div>
</footer>
