<template>
  <section
    id="contact"
    class="relative min-h-svh w-full overflow-clip p-3 sm:p-[4vh] select-none"
  >
    <div
      class="flex-center relative h-[92vh] w-full flex-col rounded-lg bg-[#1E0F13] uppercase"
    >
      <div
        class="absolute inset-0 rounded-lg overflow-hidden"
      >
        <div class="absolute inset-0 bg-gradient-to-t from-[#1E0F13] via-[#1E0F13]/40 to-[#1E0F13]/70"></div>
        <div class="pointer-events-none absolute inset-0">
          <div
            v-for="n in 20"
            :key="n"
            class="vision-particle absolute rounded-full bg-flax-smoke-400/10"
            :style="getParticleStyle(n)"
          ></div>
        </div>
      </div>

      <div class="flex-center z-10 flex-col gap-y-6 sm:gap-y-10">
        <p
          class="text-sm sm:heading-4 text-flax-smoke-300 max-w-[30ch] text-center font-mono"
        >
          Preparing India For Revival
        </p>
        <h3
          id="final-vision-text"
          class="heading-1 text-flax-smoke-200 max-w-[12ch] text-center leading-none"
          v-html="finalVisionText"
        ></h3>

        <div class="mt-8 flex flex-col items-center gap-2 text-center normal-case">
          <p class="heading-5 text-flax-smoke-300/80">One Soul.</p>
          <p class="heading-5 text-flax-smoke-300/80">One Family.</p>
          <p class="heading-5 text-flax-smoke-300/80">One Church.</p>
          <p class="heading-5 text-flax-smoke-200 font-bold">One Nation.</p>
        </div>

        <div
          class="mt-[5%] flex scale-100 items-center sm:scale-125 lg:scale-[1.5] xl:scale-[2]"
        >
          <Button label="Join the Mission" url="#mission" />
        </div>
      </div>

      <div
        class="absolute bottom-3 sm:bottom-5 flex w-full items-center justify-center px-3 sm:px-5 md:justify-between"
      >
        <div class="hidden md:flex md:flex-col">
          <p
            class="text-flax-smoke-300 font-mono text-sm font-bold uppercase"
          >
            Yeshua The Messiah Mission
          </p>
          <p class="text-flax-smoke-500 font-mono text-xs">
            Vision 2030 &middot; 100 Churches Across India
          </p>
        </div>

        <div class="heading-6 text-flax-smoke-500 w-fit">
          <p class="w-full font-bold uppercase">For Partnership & Prayer</p>
          <p class="text-flax-smoke-300 mt-1 font-medium tracking-wider">
            info@ymm.org
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { Button } from '../common';
  import { onBeforeMount, onMounted, ref } from 'vue';
  import { textSplitterIntoChar } from '@/functions';
  import { animateSplitText } from '@/animations';

  const finalVisionText = ref("Goal for Souls");

  onBeforeMount(() => {
    finalVisionText.value = textSplitterIntoChar(finalVisionText.value);
  });

  onMounted(() => {
    animateSplitText(
      '#final-vision-text .letters',
      '#final-vision-text',
      1.5,
      0.01,
      0,
    );
  });

  const getParticleStyle = (n: number) => {
    const size = Math.random() * 6 + 2;
    return {
      width: `${size}px`,
      height: `${size}px`,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDuration: `${Math.random() * 15 + 10}s`,
      animationDelay: `${Math.random() * 5}s`,
    };
  };
</script>

<style scoped>
  .vision-particle {
    animation: vision-float linear infinite;
  }

  @keyframes vision-float {
    0%,
    100% {
      transform: translateY(0) scale(1);
      opacity: 0;
    }
    15% {
      opacity: 0.8;
    }
    85% {
      opacity: 0.8;
    }
    50% {
      transform: translateY(-80px) scale(1.5);
    }
  }
</style>
