<template>
  <section id="church-planting" class="common-padding relative overflow-clip">
    <div class="mb-8 sm:mb-12">
      <h3
        id="church-heading"
        v-html="churchHeading"
        class="heading-1 max-sm:heading-2 leading-none font-bold uppercase"
      ></h3>
      <div
        id="church-sub"
        class="md:column-gap text-t-text-2 mt-[5%] grid grid-cols-12 justify-end opacity-0"
      >
        <p
          class="heading-6 text-t-text-2/85 col-span-full sm:col-span-4 text-center sm:text-nowrap"
        >
          ( CHURCH PLANTING )
        </p>
        <p
          class="heading-4 font-fancy col-span-8 w-full text-balance sm:font-semibold lg:col-span-6"
        >
          A five-year strategic journey from foundation to a fully connected
          network of 100 churches spanning nations' priority states.
        </p>
      </div>
    </div>

    <div class="relative mt-10 sm:mt-20">
      <div
        class="absolute left-8 top-0 bottom-0 hidden w-px bg-t-border md:block"
      ></div>

      <div
        v-for="(phase, i) in timelinePhases"
        :key="phase.year"
        class="timeline-item group relative mb-10 sm:mb-20 grid grid-cols-12 gap-4 sm:gap-6 opacity-0 translate-y-10"
      >
        <div
          class="col-span-full flex items-start gap-8 md:col-span-2 md:flex-col md:items-center"
        >
          <div
            class="flex-center relative z-10 size-12 sm:size-16 rounded-full border-2 border-t-border-2 bg-t-bg transition-colors duration-500 group-hover:border-t-text-2"
          >
            <span
              class="font-mono text-sm font-bold text-t-muted transition-colors duration-500 group-hover:text-t-text"
            >
              {{ (i + 1).toString().padStart(2, '0') }}
            </span>
          </div>
        </div>

        <div class="col-span-full md:col-span-10">
          <div
            class="rounded-lg border border-t-border bg-t-card p-5 sm:p-8 transition-all duration-500 group-hover:border-t-border-2"
          >
            <div class="flex items-baseline gap-4">
              <span
                class="heading-2 font-title font-extrabold text-t-text"
              >
                {{ phase.year }}
              </span>
              <span class="heading-4 font-bold text-t-muted">
                {{ phase.label }}
              </span>
            </div>
            <p
              class="mt-4 max-w-[50ch] text-base text-t-text-2/80 text-balance"
            >
              {{ phase.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { animateSplitText } from '@/animations';
  import { textSplitterIntoChar } from '@/functions';
  import { timelinePhases } from '@/data';
  import { onBeforeMount, onMounted, ref } from 'vue';
  import gsap from 'gsap';
  import ScrollTrigger from 'gsap/ScrollTrigger';

  gsap.registerPlugin(ScrollTrigger);

  const churchHeading = ref('100 Churches by 2030 /');

  onBeforeMount(() => {
    churchHeading.value = textSplitterIntoChar(
      '100 Churches by 2030 /',
      true,
    );
  });

  onMounted(() => {
    animateSplitText(
      '#church-heading .letters',
      '#church-sub',
      0.7,
      0.01,
      0,
    );

    gsap.utils.toArray('.timeline-item').forEach((item: any, i: number) => {
      gsap.to(item, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: i * 0.1,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: item,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      });
    });
  });
</script>
