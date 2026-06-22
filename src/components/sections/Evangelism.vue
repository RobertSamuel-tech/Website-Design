<template>
  <section id="evangelism" class="common-padding relative overflow-clip bg-t-bg">
    <div class="mb-12">
      <h3
        id="evangelism-heading"
        v-html="evangelismHeading"
        class="heading-1 max-sm:heading-2 leading-none font-bold uppercase"
      ></h3>
      <div
        id="evangelism-sub"
        class="md:column-gap text-t-text-2 mt-[5%] grid grid-cols-12 justify-end opacity-0"
      >
        <p
          class="heading-6 text-t-text-2/85 col-span-full sm:col-span-4 text-center sm:text-nowrap"
        >
          ( IEMM )
        </p>
        <p
          class="heading-4 font-fancy col-span-8 w-full text-balance sm:font-semibold lg:col-span-6"
        >
          Sending and supporting individual missionaries to unreached
          communities, proclaiming the Gospel and making disciples across India.
        </p>
      </div>
    </div>

    <div class="mt-10 sm:mt-20 grid grid-cols-12 gap-8">
      <div
        class="col-span-full grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6 md:col-span-8 md:col-start-3"
      >
        <div
          v-for="stat in evangelismStats"
          :key="stat.label"
          class="evangelism-stat flex-center flex-col rounded-lg border border-t-border bg-t-card p-5 sm:p-8 opacity-0 translate-y-8"
        >
          <span
            :id="stat.id"
            class="heading-1-alt font-title font-extrabold text-t-text"
            >0</span
          >
          <p class="heading-6 mt-3 text-center font-bold uppercase text-t-muted">
            {{ stat.label }}
          </p>
          <p class="mt-2 text-center text-sm text-t-muted-2">
            {{ stat.description }}
          </p>
        </div>
      </div>
    </div>

    <div class="mt-10 sm:mt-20 grid grid-cols-12 gap-8">
      <div class="col-span-full md:col-span-6 md:col-start-4">
        <div class="space-y-4">
          <div
            v-for="(focus, i) in missionFocuses"
            :key="focus"
            class="evangelism-focus group flex items-center gap-6 border-b border-t-border pb-4 opacity-0 translate-x-[-20px] transition-all duration-500"
          >
            <span
              class="font-mono text-sm text-t-muted-2 transition-colors duration-500 group-hover:text-t-text"
            >
              {{ (i + 1).toString().padStart(2, '0') }}
            </span>
            <h5
              class="heading-5 font-bold text-t-text-2 transition-colors duration-500 group-hover:text-t-text"
            >
              {{ focus }}
            </h5>
            <div
              class="ml-auto h-1 w-0 rounded-full bg-t-accent/50 transition-all duration-700 group-hover:w-16"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { animateSplitText, counterAnimation } from '@/animations';
  import { textSplitterIntoChar } from '@/functions';
  import { onBeforeMount, onMounted, ref } from 'vue';
  import gsap from 'gsap';
  import ScrollTrigger from 'gsap/ScrollTrigger';

  gsap.registerPlugin(ScrollTrigger);

  const evangelismHeading = ref('Individual Evangelical Missionary Movement /');

  const evangelismStats = [
    {
      id: 'counter-missionaries',
      value: 150,
      label: 'Missionaries',
      description: 'Trained and deployed across India',
    },
    {
      id: 'counter-outreach',
      value: 500,
      label: 'Outreach Events',
      description: 'Gospel proclamation campaigns',
    },
    {
      id: 'counter-communities',
      value: 75,
      label: 'Communities Reached',
      description: 'Villages and neighborhoods impacted',
    },
  ];

  const missionFocuses = [
    'Unreached People Groups',
    'Village Evangelism',
    'Urban Church Planting',
    'Discipleship Networks',
    'Missionary Training',
  ];

  onBeforeMount(() => {
    evangelismHeading.value = textSplitterIntoChar(
      'Individual Evangelical Missionary Movement /',
      true,
    );
  });

  onMounted(() => {
    animateSplitText(
      '#evangelism-heading .letters',
      '#evangelism-sub',
      0.7,
      0.01,
      0,
    );

    evangelismStats.forEach((stat) => {
      counterAnimation(`#${stat.id}`, stat.value, 2.5, '+');
    });

    gsap.utils.toArray('.evangelism-stat').forEach((el: any, i: number) => {
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: i * 0.15,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      });
    });

    gsap.utils.toArray('.evangelism-focus').forEach((el: any, i: number) => {
      gsap.to(el, {
        opacity: 1,
        x: 0,
        duration: 0.6,
        delay: i * 0.1,
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
