<template>
  <section id="seminary" class="common-padding relative overflow-clip">
    <div class="md:column-gap grid grid-cols-12">
      <div class="hide-on-mobile overflow-hidden md:col-span-4">
        <svg
          id="seminary-arrow"
          stroke="currentColor"
          fill="none"
          stroke-width="1.25"
          viewBox="6 6 12 12"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="hide-on-mobile m-0 size-20 -translate-x-full p-0"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="7" y1="7" x2="17" y2="17"></line>
          <polyline points="17 7 17 17 7 17"></polyline>
        </svg>
      </div>

      <h3
        id="seminary-heading"
        v-html="seminaryHeading"
        class="heading-1-alt lg:heading-1 col-span-full leading-none font-extrabold uppercase md:col-span-8 md:col-start-6"
      ></h3>
    </div>

    <div class="padding-y md:column-gap mt-4 sm:mt-6 grid grid-cols-1 md:grid-cols-12">
      <div class="col-span-full md:col-span-4">
        <p class="heading-6 text-t-text-2/85 sm:text-nowrap uppercase">
          ( ELIJAH THEOLOGICAL SEMINARY )
        </p>
        <p class="heading-5 mt-4 font-fancy text-t-text-2 text-balance sm:max-w-[30ch]">
          Equipping the next generation of pastors, evangelists and church
          leaders through rigorous theological education and practical ministry
          training.
        </p>
      </div>

      <div class="col-span-full mt-10 md:col-span-8 md:col-start-6 md:mt-0">
        <div class="space-y-6">
          <div
            v-for="(program, i) in seminaryPrograms"
            :key="program.title"
            class="seminary-card group grid grid-cols-12 items-start gap-4 border-b border-t-border pb-6 opacity-0 translate-y-8"
          >
            <div class="col-span-2 md:col-span-1">
              <span
                class="font-mono text-sm text-t-muted-2 transition-colors duration-500 group-hover:text-t-text"
              >
                {{ (i + 1).toString().padStart(2, '0') }}
              </span>
            </div>
            <div class="col-span-10 md:col-span-5">
              <h4
                class="heading-3 font-bold text-t-text transition-colors duration-500 group-hover:text-t-text"
              >
                {{ program.title }}
              </h4>
            </div>
            <div class="col-span-10 col-start-3 md:col-span-6 md:col-start-7">
              <p class="text-base text-t-text-2/70 text-balance">
                {{ program.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { animateSplitText, xToZero } from '@/animations';
  import { textSplitterIntoChar } from '@/functions';
  import { seminaryPrograms } from '@/data';
  import { onBeforeMount, onMounted, ref } from 'vue';
  import gsap from 'gsap';
  import ScrollTrigger from 'gsap/ScrollTrigger';

  gsap.registerPlugin(ScrollTrigger);

  const seminaryHeading = ref('Elijah Theological Seminary /');

  onBeforeMount(() => {
    seminaryHeading.value = textSplitterIntoChar(
      'Elijah Theological Seminary /',
      true,
      true,
    );
  });

  onMounted(() => {
    animateSplitText(
      '#seminary-heading .letters',
      '#seminary-heading',
      1,
      0.01,
      0,
      () => {
        xToZero('#seminary-arrow');
      },
    );

    gsap.utils.toArray('.seminary-card').forEach((card: any, i: number) => {
      gsap.to(card, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        delay: i * 0.15,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      });
    });
  });
</script>
