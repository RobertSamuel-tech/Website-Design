<template>
  <section
    id="mission"
    class="common-padding text-t-text relative z-10 overflow-clip rounded-b-3xl bg-t-bg shadow-2xl will-change-auto sm:mt-0"
  >
    <div class="md:column-gap grid grid-cols-12">
      <div class="hide-on-mobile overflow-hidden md:col-span-4">
        <svg
          id="down-arrow-2"
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
        id="mission-heading"
        v-html="missionHeading"
        class="heading-1-alt lg:heading-1 section-heading col-span-full leading-none font-extrabold uppercase md:col-span-8 md:col-start-6"
      ></h3>
    </div>

    <div class="padding-y md:column-gap mt-4 sm:mt-6 grid grid-cols-1 md:grid-cols-12">
      <div
        class="pointer-events-none col-span-full content-end rounded-lg select-none hidden md:block md:col-span-4"
      >
        <div
          class="flex-center aspect-[1/1.2] w-full rounded-lg bg-t-card overflow-hidden"
        >
          <svg
            class="w-2/3 opacity-20 animate-[spin_30s_linear_infinite]"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M127.14 200C99.9942 200 99.9943 167.423 72.8487 167.423C41.6048 167.423 0 158.386 0 127.133C0 99.9885 32.5678 99.9885 32.5678 72.8445C32.5678 41.6139 41.6048 0 72.8602 0C100.006 0 100.006 32.5774 127.151 32.5774C158.384 32.5774 200 41.6139 200 72.8675C200 100.012 167.421 100.012 167.421 127.156C167.409 158.444 158.384 200 127.14 200Z"
              class="fill-t-muted-2/30"
            />
          </svg>
        </div>
      </div>
      <div class="col-span-full mt-6 sm:mt-10 md:col-span-8 md:col-start-6">
        <p
          class="heading-4 relative w-full max-w-[40ch] leading-snug font-medium text-balance"
        >
          To proclaim Yeshua the Messiah, equip believers, plant churches,
          disciple nations and prepare communities for spiritual transformation.
        </p>

        <div
          class="text-t-text-2 mt-[5%] flex flex-col gap-4 sm:flex-row sm:justify-start sm:gap-10 md:gap-20"
        >
          <p class="heading-6 text-t-text-2/85 text-center sm:text-nowrap">
            ( OUR MISSION )
          </p>
          <p class="heading-6 font-fancy w-full text-balance sm:max-w-[40ch]">
            We exist as a covenant community called to reach the unreached,
            restore the broken, and raise a generation of Spirit-empowered
            leaders across India. Through seven interconnected ministries, we
            advance the Kingdom in prayer, education, evangelism, and church
            planting.
            <br /><br />
            Our heartbeat is simple: every soul matters, every community
            deserves hope, and every nation can be transformed by the power of
            Yeshua.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import {
    animateSplitText,
    xToZero,
    animateSectionLeave,
  } from '@/animations';
  import { textSplitterIntoChar } from '@/functions';
  import { onBeforeMount, onMounted, ref } from 'vue';

  const missionHeading = ref('Our Mission /');

  onBeforeMount(() => {
    missionHeading.value = textSplitterIntoChar(
      'Our Mission /',
      true,
      true,
    );
  });

  onMounted(() => {
    animateSplitText(
      '#mission-heading .letters',
      '#mission-heading',
      1,
      0.01,
      0,
      () => {
        xToZero('#down-arrow-2');
      },
    );

    animateSectionLeave('#mission');
  });
</script>
