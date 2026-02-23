<script lang="ts">
  let { type, placeholder, value, style } = $props();
</script>

<input
  {type}
  {placeholder}
  {value}
  class="{style} flex h-10 w-full rounded-md border border-[#E5E2DC] bg-surface-500 px-3 py-2 text-base ring-offset-surface-contrast-500 placeholder:text-surface-contrast-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2E9E93] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
/>
