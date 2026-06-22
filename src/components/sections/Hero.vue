<template>
  <!-- Hero stage: fixed background layer -->
  <div id="hero-wrapper" class="relative" style="height: 200vh">
    <div
      id="hero"
      class="fixed inset-0 z-0 flex min-h-svh w-full flex-col justify-center padding-x"
    >
      <div
        id="hero-content"
        class="relative mx-auto flex w-full max-w-[1440px] flex-col pt-[clamp(4.5rem,8vh,7rem)] will-change-transform"
      >
        <!-- Main Headline -->
        <div class="relative w-full max-w-[900px] overflow-clip">
          <h1
            id="hero-title"
            v-html="heroTitle"
            class="hero-heading w-full font-extrabold uppercase"
          ></h1>
          <div
            id="star"
            class="pointer-events-none absolute right-0 top-[0.1em] hidden opacity-0 sm:block"
          >
            <Star
              class="!h-[clamp(1.5rem,2vw,2.5rem)] !w-[clamp(1.5rem,2vw,2.5rem)]"
            />
          </div>
        </div>

        <!-- Tagline -->
        <div class="mt-[clamp(1rem,2vw,2rem)] overflow-clip">
          <p
            id="hero-tagline"
            class="translate-y-full text-sm font-medium tracking-wide text-t-text-2 will-change-transform sm:text-base md:text-lg"
          >
            Winning Souls. Transforming Nations. Preparing the Way.
          </p>
        </div>

        <!-- Content Grid -->
        <div
          class="mt-[clamp(1.5rem,2.5vw,3rem)] grid w-full grid-cols-12 lg:column-gap"
        >
          <div
            class="col-span-full flex flex-col items-start gap-5 sm:col-span-7 lg:col-span-6"
          >
            <div class="overflow-hidden">
              <svg
                id="down-arrow"
                stroke="currentColor"
                fill="none"
                stroke-width="1.25"
                viewBox="6 6 12 12"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="hide-on-mobile m-0 size-4 -translate-x-full p-0 md:size-5"
                color="#7D635E"
                style="color: #7d635e"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line x1="7" y1="7" x2="17" y2="17"></line>
                <polyline points="17 7 17 17 7 17"></polyline>
              </svg>
            </div>

            <p class="sr-only">
              A movement dedicated to evangelism, discipleship, church planting,
              prayer, theological education, youth transformation and national
              revival.
            </p>
            <p
              v-html="whoAmI"
              id="whoAmI"
              class="who-am-i w-full max-w-[50ch] overflow-clip text-sm leading-relaxed font-medium text-t-text-2 text-balance sm:text-base lg:text-start"
            ></p>

            <div
              id="hero-cta"
              class="relative flex w-full flex-col gap-3 overflow-hidden pt-1 -translate-y-full origin-left sm:w-auto sm:flex-row"
            >
              <Button label="Explore the Mission" url="#mission" />
              <Button
                label="Vision 2030"
                url="#vision"
                class="border border-t-border-2"
              />
            </div>
          </div>

          <div
            class="relative col-span-full mt-6 size-full overflow-clip text-end sm:col-span-5 sm:mt-0 lg:col-span-4 lg:col-start-9"
          >
            <div
              id="hero-bottom-tag"
              class="flex translate-y-full flex-col items-start sm:absolute sm:right-0 sm:bottom-0 sm:items-end"
            >
              <p
                class="block text-xs leading-snug font-medium tracking-wide text-t-muted uppercase"
              >
                Goal for Souls
              </p>
              <h3
                class="font-fancy mt-1 block text-2xl leading-none font-bold -tracking-tight text-t-text sm:text-3xl md:text-4xl lg:text-5xl"
              >
                Vision 2030
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { onBeforeMount, ref } from 'vue';
  import { Star } from '../design';
  import { Button } from '@/components/common';
  import { textSplitterIntoChar } from '@/functions';

  const heroTitle = ref('Yeshua The Messiah Mission');
  const whoAmI = ref(
    'A movement dedicated to evangelism, discipleship, church planting, prayer, theological education, youth transformation and national revival.',
  );

  onBeforeMount(() => {
    heroTitle.value = textSplitterIntoChar(
      'Yeshua The Messiah Mission',
      true,
      true,
    );
    whoAmI.value = textSplitterIntoChar(whoAmI.value);
  });
</script>

<style>
  .hero-heading {
    font-size: clamp(3rem, 7vw, 7rem);
    line-height: 0.88;
    letter-spacing: -0.04em;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    word-break: break-word;
    overflow-wrap: break-word;
  }

  @media (max-width: 640px) {
    .hero-heading {
      font-size: clamp(2.5rem, 11vw, 4rem);
      line-height: 0.9;
      letter-spacing: -0.03em;
    }
  }

  @media (min-width: 641px) and (max-width: 1024px) {
    .hero-heading {
      font-size: clamp(3rem, 7vw, 5.5rem);
      line-height: 0.88;
    }
  }
</style>
