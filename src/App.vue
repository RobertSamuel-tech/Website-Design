<template>
  <LoadingScreen v-cloak="true" />

  <div class="pointer-events-none fixed inset-0 z-50">
    <svg
      class="h-[150vh] w-full object-cover object-center"
      xmlns="http://www.w3.org/2000/svg"
    >
      <filter id="noise">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.65"
          numOctaves="1"
          stitchTiles="stitch"
        />
        <feBlend mode="screen" />
      </filter>
      <rect
        ref="noise"
        class="size-full"
        filter="url(#noise)"
        :opacity="noiseOpacity"
      />

      <filter id="noise2">
        <feTurbulence
          type="fractalNoise"
          base-frequency="0.8"
          numOctaves="1"
          stitchTiles="stitch"
        />
        <feBlend mode="screen" />
      </filter>
      <rect class="size-full" filter="url(#noise2)" opacity="-0.88" />
    </svg>
  </div>

  <!-- Floating orbs for light theme depth -->
  <div class="pointer-events-none fixed inset-0 z-0 overflow-hidden">
    <div
      class="orb absolute -top-[20%] -right-[10%] h-[60vh] w-[60vh] rounded-full blur-[120px] transition-opacity duration-1000"
      :style="{ background: 'var(--t-orb-blue)' }"
    ></div>
    <div
      class="orb absolute top-[40%] -left-[15%] h-[50vh] w-[50vh] rounded-full blur-[100px] transition-opacity duration-1000"
      :style="{ background: 'var(--t-orb-gold)' }"
    ></div>
    <div
      class="orb absolute -bottom-[10%] right-[20%] h-[40vh] w-[40vh] rounded-full blur-[80px] transition-opacity duration-1000"
      :style="{ background: 'var(--t-orb-green)' }"
    ></div>
  </div>

  <Cursor />
  <ThemeToggle />
  <Navbar @isLocked="LockeScroll" />

  <main class="relative min-h-full">
    <!-- Hero: fixed background stage -->
    <Hero />

    <!-- Scroll content: slides over the hero -->
    <div id="scroll-content" class="relative z-10 bg-t-bg">
      <div class="relative rounded-t-3xl bg-t-bg-2 py-[5%] text-t-text shadow-[0_-20px_60px_rgba(0,0,0,0.08)]">
        <Network />
        <ChurchPlanting />
      </div>

      <Mission />
      <Vision2030 />
      <PrayerMovement />

      <div class="relative rounded-t-3xl bg-t-bg-2 py-[5%] text-t-text">
        <Seminary />
      </div>

      <YouthMovement />
      <Evangelism />
      <Revival />
      <FinalVision />

      <div class="bg-t-bg">
        <Footer />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
  import {
    Hero,
    Mission,
    Vision2030,
    Network,
    ChurchPlanting,
    PrayerMovement,
    Seminary,
    YouthMovement,
    Evangelism,
    Revival,
    FinalVision,
  } from '@/components/sections';
  import { onMounted, type Ref, ref, watch, computed } from 'vue';
  import {
    LoadingScreen,
    Marquee,
    Footer,
    Cursor,
    ThemeToggle,
  } from '@/components/design';
  import { useWindowSize } from '@vueuse/core';
  import { Navbar } from './components/common';
  import { lenis, raf } from './main';
  import { useTheme } from './composables/useTheme';

  const { theme } = useTheme();

  const { width, height } = useWindowSize();
  const noise: Ref<HTMLElement | null> = ref(null);

  const noiseOpacity = computed(() =>
    theme.value === 'light' ? 0.03 : 0.15,
  );

  const LockeScroll = (isLocked: boolean) => {
    if (isLocked) {
      lenis.stop();
    } else {
      lenis.start();
    }
  };

  watch([width, height], () => {
    if (noise.value) {
      noise.value.style.height = `${height.value * 2}px`;
      noise.value.style.width = `${width.value}px`;
    }
  });

  onMounted(() => {
    document.body.classList.add('stop-scrolling');
    setTimeout(() => {
      requestAnimationFrame(raf);
    }, 2000);
  });
</script>

<style>
  .stop-scrolling #app {
    max-height: 100svh !important;
    overflow: hidden !important;
  }
</style>
