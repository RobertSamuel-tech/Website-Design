<template>
  <section
    id="vision"
    class="common-padding relative min-h-[80vh] overflow-clip bg-t-bg py-0 will-change-transform"
  >
    <div
      class="border-t-border grid w-full grid-cols-12 border-b pb-[clamp(2.25rem,2.1786rem_+_0.3571vi,2.5rem)]"
    >
      <h3
        id="vision-heading"
        v-html="visionHeading"
        class="heading-1 max-sm:heading-2 text-t-text col-span-full leading-none font-bold uppercase will-change-auto"
      ></h3>
      <div
        id="vision-sub"
        class="text-t-text-2 col-span-full mt-[5%] flex justify-end gap-10 opacity-0 sm:gap-20 lg:col-span-10"
      >
        <p class="heading-6 text-center sm:text-nowrap uppercase">
          ( GOAL FOR SOULS )
        </p>
        <p class="heading-6 font-fancy w-full text-balance sm:max-w-[40ch]">
          A strategic initiative to plant and sustain 100 churches across
          key regions by 2030, equipping communities with the Gospel and
          building a lasting foundation for spiritual transformation.
        </p>
      </div>
    </div>

    <div class="mt-[8%] grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-10">
      <div class="col-span-full flex flex-col items-center md:col-span-6">
        <div class="flex-center flex-col">
          <span
            id="counter-churches"
            class="font-title heading-display font-extrabold leading-none text-t-text"
            >0</span
          >
          <p class="heading-4 mt-4 font-bold uppercase text-t-muted">
            Churches Planned
          </p>
        </div>

        <div class="mt-8 sm:mt-16 grid w-full grid-cols-1 gap-6 sm:grid-cols-3">
          <div class="flex-center flex-col">
            <span
              id="counter-states"
              class="font-title heading-2 font-extrabold text-t-text"
              >0</span
            >
            <p class="heading-6 mt-2 text-center text-t-muted">
              Priority States
            </p>
          </div>
          <div class="flex-center flex-col">
            <span
              id="counter-orgs"
              class="font-title heading-2 font-extrabold text-t-text"
              >0</span
            >
            <p class="heading-6 mt-2 text-center text-t-muted">
              Mission Organizations
            </p>
          </div>
          <div class="flex-center col-span-2 flex-col sm:col-span-1">
            <span
              id="counter-years"
              class="font-title heading-2 font-extrabold text-t-text"
              >0</span
            >
            <p class="heading-6 mt-2 text-center text-t-muted">
              Years of Mission
            </p>
          </div>
        </div>
      </div>

      <div class="col-span-full md:col-span-6">
        <div class="relative w-full">
          <h4 class="heading-3 mb-4 sm:mb-8 font-bold uppercase text-t-text-2">
            Priority States
          </h4>
          <div class="space-y-4">
            <div
              v-for="(state, i) in priorityStates"
              :key="state"
              class="group flex items-center gap-6 border-b border-t-border pb-4 transition-all duration-500"
            >
              <span
                class="font-mono text-sm text-t-muted-2 transition-colors duration-500 group-hover:text-t-text"
              >
                {{ (i + 1).toString().padStart(2, '0') }}
              </span>
              <h5
                class="heading-4 font-bold text-t-text-2 transition-colors duration-500 group-hover:text-t-text"
              >
                {{ state }}
              </h5>
              <div
                class="ml-auto h-1 w-0 rounded-full bg-t-accent transition-all duration-700 group-hover:w-24"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { animateSplitText, counterAnimation } from '@/animations';
  import { textSplitterIntoChar } from '@/functions';
  import { priorityStates } from '@/data';
  import { onBeforeMount, onMounted, ref } from 'vue';

  const visionHeading = ref('Vision 2030 /');

  onBeforeMount(() => {
    visionHeading.value = textSplitterIntoChar('Vision 2030 /', true);
  });

  onMounted(() => {
    animateSplitText(
      '#vision-heading .letters',
      '#vision-sub',
      0.7,
      0.01,
      0,
    );

    counterAnimation('#counter-churches', 100, 2.5, '+');
    counterAnimation('#counter-states', 5, 1.5);
    counterAnimation('#counter-orgs', 7, 1.5);
    counterAnimation('#counter-years', 4, 1.5);
  });
</script>
