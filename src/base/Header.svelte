<script lang="ts">
  import Icon from "./../lib/Icons/Icon.svelte";

  const links = [
    { label: "Inicio", href: "#inicio" },
    { label: "Explorar", href: "#explorar" },
    { label: "Carreras", href: "#carreras" },
    { label: "Recursos", href: "#recursos" },
    { label: "Contacto", href: "#contacto" },
  ];

  let open: boolean = false;
</script>

<nav
  class="fixed top-0 left-0 right-0 z-50 bg-surface-500/80 w-full backdrop-blur-lg border-b border-[#E5E2DC]"
>
  <div class="container mx-auto flex items-center justify-between h-16 px-4">
    <a
      href="#inicio"
      class="flex items-center gap-2 text-primary-500 font-bold text-xl"
    >
      <Icon name="GraduationCap" class="size-6" />
      <span>MiCarreraPerfecta</span>
    </a>

    <!-- Vista Escritorio -->
    <ul class="hidden md:flex items-center gap-8">
      {#each links as link}
        <li>
          <a
            href={link.href}
            class="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            {link.label}
          </a>
        </li>
      {/each}
    </ul>
    <button
      on:click={() => (open = !open)}
      class="md:hidden text-black btn-icon transition-all duration-300"
    >
      {#if open}
        <Icon name="X" class="size-6" />
      {:else}
        <Icon name="Menu" class="size-6" />
      {/if}
    </button>
  </div>

  <!-- Vista Mobile -->
   {#if open}
     <div class="md:hidden bg-surface-500 border-b border-[#E5E2DC]">
         <ul class="flex flex-col gap-1 p-4">
             {#each links as link}
             <li>
                 <a
                 href={link.href}
                 on:click={() => (open = !open)}
                 class="block py-2 px-3 rounded-md text-sm font-medium text-muted-foreground hover:text-primary hover:bg-secondary transition-colors"
                 >
                 {link.label}
                </a>
            </li>
            {/each}
        </ul>
    </div>
    {/if}
</nav>
