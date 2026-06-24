<template>
  <div
    v-if="!isLoading"
    id="loading-screen"
    class="fixed bottom-0 z-99999 size-full cursor-wait bg-[#1E0F13]"
  >
    <div class="size-full">
      <!-- SVG path for curved reveal animation -->
      <svg
        :width="width"
        :height="height * 2"
        class="absolute top-0 z-0 h-[calc(100%_+_300px)]"
      >
        <defs>
          <radialGradient id="loader-gradient" cx="50%" cy="40%" r="70%">
            <stop offset="0%" stop-color="#2A1419" />
            <stop offset="100%" stop-color="#1E0F13" />
          </radialGradient>
        </defs>
        <path ref="path" class="w-full" :d="pathData" fill="url(#loader-gradient)" />
      </svg>

      <!-- Centered logo -->
      <div
        id="loader-logo"
        class="relative z-1 flex size-full items-center justify-center opacity-0"
        style="transform: translateZ(0px)"
      >
        <img
          src="/logo.png"
          alt="YMM"
          class="will-change-transform"
          style="width: clamp(140px, 18vw, 300px)"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useWindowSize } from '@vueuse/core';
  import { computed, onMounted, Ref, ref, watch } from 'vue';
  import { animateLoadingPath } from '@/animations';
  import gsap from 'gsap';

  const isLoading = ref(false);
  const pathData = ref('');
  const path = ref<SVGPathElement>();

  const { width, height } = useWindowSize();
  let curveHeight = computed(() => {
    let multiplier = 0.3;
    if (width.value < 600) {
      multiplier = 0.15;
    } else if (width.value < 900) {
      multiplier = 0.2;
    }
    return height.value + height.value * multiplier;
  });
  const initialPath = ref(
    `M0 0 L${width.value} 0 L${width.value} ${height.value} Q${width.value / 2} ${curveHeight.value} 0 ${height.value}  L0 0`,
  );
  const targetPath = ref(
    `M0 0 L${width.value} 0 L${width.value} ${height.value} Q${width.value / 2} ${height.value} 0 ${height.value}  L0 0`,
  );

  onMounted(() => {
    pathData.value = initialPath.value;

    gsap.fromTo(
      '#loader-logo',
      { opacity: 0, scale: 0.95 },
      { opacity: 1, scale: 1, duration: 1.2, ease: 'power2.out', delay: 0.3 },
    );

    animateLoadingPath(path as Ref<SVGPathElement>, targetPath.value);
  });

  watch(
    [width, height],
    () => {
      initialPath.value = `M0 0 L${width.value} 0 L${width.value} ${height.value} Q${width.value / 2} ${curveHeight.value} 0 ${height.value} L0 0`;
      targetPath.value = `M0 0 L${width.value} 0 L${width.value} ${height.value} Q${width.value / 2} ${height.value} 0 ${height.value}  L0 0`;
      pathData.value = initialPath.value;
    },
    { immediate: true },
  );
</script>
