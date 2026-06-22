<template>
  <section
    id="prayer"
    class="relative min-h-svh w-full overflow-clip select-none"
  >
    <div
      class="flex-center relative min-h-svh w-full flex-col bg-[#1E0F13] p-[4vh]"
    >
      <div class="pointer-events-none absolute inset-0 overflow-hidden">
        <div class="particle-field absolute inset-0">
          <div
            v-for="n in particleCount"
            :key="n"
            class="particle absolute rounded-full bg-t-particle"
            :style="getParticleStyle(n)"
          ></div>
        </div>
      </div>

      <div class="flex-center relative z-10 flex-col gap-y-8 text-center">
        <p class="heading-6 text-flax-smoke-400 font-mono uppercase tracking-widest">
          Fellowship of National Prayer Federation
        </p>
        <h3
          id="prayer-heading"
          v-html="prayerHeading"
          class="heading-1 max-sm:heading-2 text-flax-smoke-200 max-w-[15ch] leading-none"
        ></h3>
        <p
          class="heading-5 text-flax-smoke-300 mt-4 max-w-[35ch] text-balance"
        >
          Mobilizing believers across India into a unified prayer movement,
          interceding for national revival and spiritual awakening in every
          state, every city, every home.
        </p>

        <div class="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-16">
          <div class="flex-center flex-col">
            <span
              id="counter-prayer-networks"
              class="heading-2 font-title font-extrabold text-flax-smoke-200"
              >0</span
            >
            <p class="heading-6 mt-2 text-flax-smoke-400">Prayer Networks</p>
          </div>
          <div class="flex-center flex-col">
            <span
              id="counter-prayer-cities"
              class="heading-2 font-title font-extrabold text-flax-smoke-200"
              >0</span
            >
            <p class="heading-6 mt-2 text-flax-smoke-400">Cities Covered</p>
          </div>
          <div class="flex-center flex-col">
            <span
              id="counter-prayer-warriors"
              class="heading-2 font-title font-extrabold text-flax-smoke-200"
              >0</span
            >
            <p class="heading-6 mt-2 text-flax-smoke-400">Prayer Warriors</p>
          </div>
        </div>
      </div>

      <div
        class="pointer-events-none absolute inset-0 flex items-center justify-center opacity-5"
      >
        <svg
          class="h-[80vh] w-auto animate-[spin_60s_linear_infinite]"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 0C103.395 53.7596 146.24 96.6052 200 100C146.24 103.395 103.395 146.24 100 200C96.6052 146.24 53.7596 103.395 0 100C53.7596 96.6052 96.6052 53.7596 100 0Z"
            class="fill-flax-smoke-400"
          />
        </svg>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { animateSplitText, counterAnimation } from '@/animations';
  import { textSplitterIntoChar } from '@/functions';
  import { computed, onBeforeMount, onMounted, ref } from 'vue';
  import { useWindowSize } from '@vueuse/core';

  const { width } = useWindowSize();
  const particleCount = computed(() => width.value < 768 ? 15 : 40);

  const prayerHeading = ref('FNPF National Prayer Movement');

  onBeforeMount(() => {
    prayerHeading.value = textSplitterIntoChar(prayerHeading.value);
  });

  onMounted(() => {
    animateSplitText(
      '#prayer-heading .letters',
      '#prayer-heading',
      1.5,
      0.01,
      0,
    );

    counterAnimation('#counter-prayer-networks', 50, 2, '+');
    counterAnimation('#counter-prayer-cities', 200, 2.5, '+');
    counterAnimation('#counter-prayer-warriors', 1000, 3, '+');
  });

  const getParticleStyle = (n: number) => {
    const size = Math.random() * 4 + 2;
    return {
      width: `${size}px`,
      height: `${size}px`,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDuration: `${Math.random() * 10 + 10}s`,
      animationDelay: `${Math.random() * 5}s`,
    };
  };
</script>

<style scoped>
  .particle {
    animation: float linear infinite;
  }

  @keyframes float {
    0%,
    100% {
      transform: translateY(0) translateX(0);
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    90% {
      opacity: 1;
    }
    50% {
      transform: translateY(-100px) translateX(30px);
    }
  }
</style>
