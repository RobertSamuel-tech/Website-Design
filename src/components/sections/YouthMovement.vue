<template>
  <section
    id="youth"
    class="text-t-text relative overflow-clip bg-t-bg"
  >
    <div
      id="youth-marquee"
      class="relative h-fit w-full overflow-clip leading-none will-change-auto py-10 sm:py-20"
    >
      <div
        id="youth-scroll-1"
        class="flex h-fit whitespace-nowrap will-change-transform"
      >
        <h4
          v-for="_ in 8"
          :key="`ys1-${_}`"
          class="sm:heading-2 flex w-full items-center text-xl font-medium text-nowrap whitespace-nowrap max-sm:mx-4"
        >
          GoForth Reforming Mission
          <span class="mx-3 inline-block text-t-muted-2 sm:mx-6">✦</span>
          Rise Up
          <span class="mx-3 inline-block text-t-muted-2 sm:mx-6">✦</span>
        </h4>
      </div>
    </div>

    <div class="common-padding">
      <div class="grid grid-cols-1 gap-8 md:grid-cols-12">
        <div class="col-span-full md:col-span-5">
          <p class="heading-6 text-t-muted uppercase tracking-widest">
            ( YOUTH & STUDENT MOVEMENT )
          </p>
          <p class="heading-4 mt-6 text-t-text-2 text-balance max-w-[35ch]">
            Igniting a generation of young reformers through campus outreach,
            leadership development and missional training across India's
            universities and communities.
          </p>
        </div>

        <div class="col-span-full md:col-span-7 md:col-start-6">
          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
            <div
              v-for="(item, i) in youthFeatures"
              :key="item.title"
              class="youth-card group rounded-lg border border-t-border bg-t-card p-5 sm:p-6 opacity-0 translate-y-8 transition-all duration-500 hover:border-t-border-2"
            >
              <span
                class="font-mono text-sm text-t-muted-2 transition-colors duration-500 group-hover:text-t-text-2"
              >
                {{ (i + 1).toString().padStart(2, '0') }}
              </span>
              <h4
                class="heading-4 mt-3 font-bold transition-colors duration-500 group-hover:text-t-text"
              >
                {{ item.title }}
              </h4>
              <p class="mt-2 text-sm text-t-muted">
                {{ item.description }}
              </p>
            </div>
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

  const youthFeatures = [
    {
      title: 'Campus Ministry',
      description:
        'Establishing student-led faith communities in universities across priority states.',
    },
    {
      title: 'Leadership Training',
      description:
        'Developing young leaders through intensive mentorship and practical ministry experience.',
    },
    {
      title: 'Mission Trips',
      description:
        'Sending teams of young missionaries to unreached villages and communities.',
    },
    {
      title: 'Digital Outreach',
      description:
        'Leveraging modern platforms to share the Gospel with the next generation.',
    },
  ];

  onMounted(() => {
    const container = document.querySelector('#youth-scroll-1') as HTMLElement;
    if (container) {
      const items = Array.from(container.children) as HTMLElement[];
      const singleSetWidth = items.slice(0, 4).reduce((sum, el) => sum + el.offsetWidth, 0);

      gsap.set(container, { x: 0 });
      gsap.to(container, {
        x: -singleSetWidth,
        duration: 25,
        ease: 'none',
        repeat: -1,
      });
    }

    gsap.utils.toArray('.youth-card').forEach((card: any, i: number) => {
      gsap.to(card, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        delay: i * 0.1,
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
