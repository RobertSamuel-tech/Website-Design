<template>
  <button
    @click="toggleTheme"
    class="theme-toggle group fixed right-5 top-5 z-[100] flex-center size-10 cursor-pointer rounded-full border transition-all duration-500 hover:scale-110 sm:right-6 sm:top-6 lg:size-11"
    :style="{ display: isReady ? undefined : 'none' }"
    :class="[
      theme === 'light'
        ? 'border-brand-gold/40 bg-white/80 shadow-lg shadow-brand-gold/20 backdrop-blur-md'
        : 'border-brand-gold/20 bg-[#2A1419]/80 shadow-lg shadow-black/30 backdrop-blur-md',
    ]"
    :aria-label="theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'"
  >
    <div class="relative size-5">
      <svg
        v-if="theme === 'light'"
        class="absolute inset-0 size-full rotate-0 scale-100 transition-transform duration-500 ease-out"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <circle cx="12" cy="12" r="4" class="stroke-brand-terra" />
        <path d="M12 2v2" class="stroke-brand-terra" />
        <path d="M12 20v2" class="stroke-brand-terra" />
        <path d="m4.93 4.93 1.41 1.41" class="stroke-brand-terra" />
        <path d="m17.66 17.66 1.41 1.41" class="stroke-brand-terra" />
        <path d="M2 12h2" class="stroke-brand-terra" />
        <path d="M20 12h2" class="stroke-brand-terra" />
        <path d="m6.34 17.66-1.41 1.41" class="stroke-brand-terra" />
        <path d="m19.07 4.93-1.41 1.41" class="stroke-brand-terra" />
      </svg>

      <svg
        v-else
        class="absolute inset-0 size-full rotate-0 scale-100 transition-transform duration-500 ease-out"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path
          d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"
          class="stroke-brand-gold"
        />
      </svg>
    </div>

    <div
      class="pointer-events-none absolute -inset-1 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      :class="
        theme === 'light'
          ? 'shadow-[0_0_20px_rgba(164,74,63,0.25)]'
          : 'shadow-[0_0_20px_rgba(210,180,140,0.25)]'
      "
    ></div>
  </button>
</template>

<script setup lang="ts">
  import { useTheme } from '@/composables/useTheme';
  import { onMounted, ref } from 'vue';

  const { theme, toggleTheme } = useTheme();
  const isReady = ref(false);

  onMounted(() => {
    setTimeout(() => {
      isReady.value = true;
    }, 4500);
  });
</script>
