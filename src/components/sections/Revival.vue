<template>
  <section
    id="revival"
    class="relative min-h-[80vh] w-full overflow-clip bg-flax-smoke-950"
  >
    <div class="flex-center relative min-h-[80vh] flex-col p-[5%]">
      <div class="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-flax-smoke-950/50 to-flax-smoke-950"></div>

      <div class="relative z-10 text-center">
        <p
          class="heading-6 text-flax-smoke-500 mb-8 font-mono uppercase tracking-[0.3em]"
        >
          Rehoboth Revival Center
        </p>

        <div class="flex flex-col items-center gap-4 sm:flex-row sm:gap-12">
          <h3
            v-for="word in revivalWords"
            :key="word"
            class="revival-word heading-1-alt sm:heading-1 font-extrabold uppercase text-flax-smoke-200 opacity-0 translate-y-8"
          >
            {{ word }}
          </h3>
        </div>

        <div class="mx-auto mt-16 max-w-[50ch]">
          <p
            class="heading-5 revival-text text-flax-smoke-300 text-balance opacity-0"
          >
            A sacred space for Spirit-led counseling, inner healing, and
            restoration — where broken lives are made whole and hearts are
            prepared for God's purpose.
          </p>
        </div>

        <div class="mt-16 grid grid-cols-3 gap-8 sm:gap-16">
          <div
            v-for="pillar in pillars"
            :key="pillar.title"
            class="revival-pillar flex-center flex-col opacity-0 translate-y-4"
          >
            <div
              class="flex-center mb-4 size-16 rounded-full border border-flax-smoke-500/30"
            >
              <span class="text-2xl text-flax-smoke-400">{{ pillar.icon }}</span>
            </div>
            <h4 class="heading-5 font-bold text-flax-smoke-200">
              {{ pillar.title }}
            </h4>
            <p class="mt-2 text-sm text-flax-smoke-500">
              {{ pillar.subtitle }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { onMounted } from 'vue';
  import gsap from 'gsap';
  import ScrollTrigger from 'gsap/ScrollTrigger';

  gsap.registerPlugin(ScrollTrigger);

  const revivalWords = ['Healing.', 'Restoration.', 'Transformation.'];

  const pillars = [
    { title: 'Healing', subtitle: 'Spirit-led inner healing ministry', icon: '✦' },
    {
      title: 'Restoration',
      subtitle: 'Rebuilding lives and families',
      icon: '◆',
    },
    {
      title: 'Transformation',
      subtitle: 'Renewed minds and empowered purpose',
      icon: '★',
    },
  ];

  onMounted(() => {
    gsap.utils.toArray('.revival-word').forEach((el: any, i: number) => {
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: i * 0.2,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      });
    });

    gsap.to('.revival-text', {
      opacity: 1,
      duration: 1.5,
      ease: 'power4.inOut',
      scrollTrigger: {
        trigger: '.revival-text',
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
    });

    gsap.utils.toArray('.revival-pillar').forEach((el: any, i: number) => {
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: i * 0.15,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 90%',
          toggleActions: 'play none none reverse',
        },
      });
    });
  });
</script>
