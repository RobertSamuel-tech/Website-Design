<template>
  <footer class="padding-x py-16 sm:py-20 lg:py-24">
    <!-- Link columns -->
    <div
      class="mx-auto flex w-full max-w-[1000px] flex-col gap-10 sm:flex-row sm:justify-between sm:gap-16"
    >
      <!-- Mission Network -->
      <div>
        <p
          class="heading-6 border-t-border-2 border-b pb-3 font-bold uppercase tracking-wider text-t-muted"
        >
          Mission Network
        </p>
        <div class="mt-4 grid grid-cols-2 gap-x-8 gap-y-1.5">
          <p v-for="link in orgLinks" :key="link.label" class="heading-6">
            <Link
              class="font-medium tracking-wider lowercase"
              :label="link.label"
              :url="link.url"
            />
          </p>
        </div>
      </div>

      <!-- Navigate -->
      <div>
        <p
          class="heading-6 border-t-border-2 border-b pb-3 font-bold uppercase tracking-wider text-t-muted"
        >
          Navigate
        </p>
        <div class="mt-4 space-y-1.5">
          <p
            v-for="link in navbarLinks"
            :key="link.label"
            class="heading-6"
          >
            <Link
              class="font-medium tracking-wider lowercase"
              :label="link.label"
              :url="link.url"
            />
          </p>
        </div>
      </div>

      <!-- Connect -->
      <div>
        <p
          class="heading-6 border-t-border-2 border-b pb-3 font-bold uppercase tracking-wider text-t-muted"
        >
          Connect
        </p>
        <div class="mt-4 space-y-1.5">
          <p
            v-for="link in connectLinks"
            :key="link.label"
            class="heading-6"
          >
            <Link
              class="font-medium tracking-wider lowercase"
              :label="link.label"
              :url="link.url"
            />
          </p>
        </div>
      </div>
    </div>

    <!-- Bottom bar -->
    <div
      class="mx-auto mt-16 flex max-w-[1000px] items-end justify-between border-t border-t-border pt-6 sm:mt-20"
    >
      <div>
        <p class="text-sm font-bold text-t-text">
          © {{ new Date().getFullYear() }} Yeshua The Messiah Mission
        </p>
        <p class="mt-1 text-xs text-t-muted">
          Winning Souls. Transforming Nations. Preparing the Way.
        </p>
      </div>

      <div class="hidden md:block">
        <MagneticEffect divId="scroll-to-top" textId="scroll-to-top-icon">
          <div
            @click="lenis.scrollTo('#app', { duration: 2 })"
            id="scroll-to-top"
            class="flex-center bg-t-accent size-12 lg:size-14 cursor-pointer flex-col rounded-full"
          >
            <svg
              class="size-1/2"
              id="scroll-to-top-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              color="#000000"
              fill="none"
            >
              <path
                d="M12 4L12 20"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16.9998 8.99996C16.9998 8.99996 13.3174 4.00001 11.9998 4C10.6822 3.99999 6.99982 9 6.99982 9"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </MagneticEffect>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
  import { navbarLinks, missionOrgs } from '@/data';
  import { Link } from '..';
  import { lenis } from '@/main';
  import MagneticEffect from '../MagneticEffect.vue';

  const orgLinks = missionOrgs.map((o) => ({
    label: o.abbr,
    url: '#network',
  }));

  const connectLinks = [
    { label: 'Prayer Request', url: '#contact' },
    { label: 'Partner With Us', url: '#contact' },
    { label: 'Contact', url: '#contact' },
  ];
</script>
