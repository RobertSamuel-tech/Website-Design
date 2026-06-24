<template>
  <section id="network" class="mb-20">
    <!-- Header -->
    <div class="flex w-full flex-col padding-x">
      <h3
        id="network-heading"
        v-html="networkHeading"
        class="heading-1 font-extrabold uppercase leading-[0.95]"
      ></h3>

      <div
        id="network-text"
        class="md:column-gap text-t-text-2 mt-[5%] grid grid-cols-12 justify-end opacity-0 lg:grid"
      >
        <p
          class="heading-6 text-t-text-2/85 col-span-full sm:col-span-4 text-center sm:text-nowrap md:col-start-4"
        >
          ( ORGANIZATIONS )
        </p>
        <p
          class="heading-4 font-fancy col-span-full sm:col-span-8 w-full text-balance sm:font-semibold md:col-span-5"
        >
          Seven interconnected ministries working as one body to advance the
          Kingdom across prayer, education, evangelism, and church planting.
        </p>
      </div>
    </div>

    <!-- Sticky stacking cards -->
    <div class="relative mt-12 w-full lg:mt-[10%] px-[clamp(1.5rem,5vw,5rem)]">
      <div class="flex flex-col">
        <div
          v-for="(org, index) in missionOrgs"
          :key="org.abbr"
          class="sticky border-t border-t-border-2 bg-t-bg-2 shadow-[0_-4px_24px_rgba(0,0,0,0.03)]"
          :style="getCardStyle(index)"
        >
          <!-- Card header -->
          <div
            class="heading-3 max-sm:heading-4 flex grid-cols-12 items-center justify-start gap-5 py-7 text-left font-semibold sm:py-6 md:grid md:justify-between pl-[clamp(1rem,3vw,3rem)]"
          >
            <span class="col-span-3 self-center text-nowrap text-t-accent">
              ( {{ org.abbr }} )
            </span>
            <h3
              class="col-span-6 col-start-5 text-nowrap font-medium text-t-text-2 md:col-start-5"
            >
              {{ org.name }}
            </h3>
          </div>

          <!-- Card body -->
          <div
            class="relative flex min-h-[20vh] flex-col place-items-start pb-10 sm:pb-12 md:grid md:min-h-[25vh] md:grid-cols-12"
          >
            <div
              class="col-span-7 col-start-5 flex w-full flex-col gap-y-5"
            >
              <p
                class="max-w-[40ch] text-balance text-base font-medium text-t-text-2/80"
              >
                {{ org.description }}
              </p>

              <p
                class="text-xs font-bold uppercase tracking-wider text-t-muted-2"
              >
                {{ org.category }}
              </p>

              <div>
                <template
                  v-for="(heading, hIndex) in org.headings"
                  :key="hIndex"
                >
                  <p
                    class="flex gap-x-3 py-1.5 font-bold text-t-text"
                    :class="{
                      'border-y border-t-border-2 py-2!': hIndex === 1,
                    }"
                  >
                    <span
                      class="self-center font-mono text-base font-medium text-t-muted-2/70"
                    >
                      {{ (hIndex + 1).toString().padStart(2, '0') }}
                    </span>
                    {{ heading }}
                  </p>
                </template>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { animateSplitText } from '@/animations';
  import { textSplitterIntoChar } from '@/functions';
  import { missionOrgs } from '@/data';
  import { onBeforeMount, onMounted, ref } from 'vue';

  const networkHeading = ref('Mission Network /');

  const shapes = [
    `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><path d="M100 0C103.395 53.7596 146.24 96.6052 200 100C146.24 103.395 103.395 146.24 100 200C96.6052 146.24 53.7596 103.395 0 100C53.7596 96.6052 96.6052 53.7596 100 0Z"/></svg>`,
    `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><path d="M127.14 200C99.9942 200 99.9943 167.423 72.8487 167.423C41.6048 167.423 0 158.386 0 127.133C0 99.9885 32.5678 99.9885 32.5678 72.8445C32.5678 41.6139 41.6048 0 72.8602 0C100.006 0 100.006 32.5774 127.151 32.5774C158.384 32.5774 200 41.6139 200 72.8675C200 100.012 167.421 100.012 167.421 127.156C167.409 158.444 158.384 200 127.14 200Z"/></svg>`,
    `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><path d="M100 0L170.711 29.2893L200 100L170.711 170.711L100 200L29.2893 170.711L0 100L29.2893 29.2893L100 0Z"/></svg>`,
  ];

  const STEP = 5.5;

  const getCardStyle = (index: number) => {
    const remaining = (missionOrgs.length - 1 - index) * STEP;
    return {
      top: `calc(20vh + ${index * STEP}em)`,
      marginBottom: `${remaining}em`,
      zIndex: index + 1,
    };
  };

  onBeforeMount(() => {
    networkHeading.value = textSplitterIntoChar('Mission Network /', true);
  });

  onMounted(() => {
    animateSplitText(
      '#network-heading .letters',
      '#network-text',
      0.7,
      0.01,
      0,
    );
  });
</script>
