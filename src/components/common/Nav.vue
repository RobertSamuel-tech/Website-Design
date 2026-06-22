<template>
  <BurgerMenuBtn
    @click="toggleBtnClickAnimation"
    class="z-9999 scale-0 drop-shadow-lg"
    id="burger"
  />

  <div
    @click="toggleBtnClickAnimation"
    class="fixed inset-0 z-9998 size-full bg-black opacity-50 select-none"
    :class="{ hidden: !isNavbarOpen }"
  ></div>

  <div
    tabindex="0"
    id="navbar"
    @keydown.esc="toggleBtnClickAnimation()"
    class="bg-t-surface fixed top-[1dvh] right-0 z-9998 h-[98dvh] w-full translate-x-full rounded-s-lg p-5 will-change-auto select-none focus:outline-hidden max-md:w-[98%] sm:p-10 md:w-3/5 md:px-12 lg:px-20 lg:w-2/5"
  >
    <Circles id="circles" class="absolute top-0 right-0 opacity-25" />
    <div class="flex h-full flex-col items-center justify-between">
      <div class="relative z-19 w-full">
        <ul
          class="heading-4 sm:heading-3 md:heading-2 text-t-text mt-8 font-bold md:mt-24"
          id="navLinks"
        >
          <li
            class="overflow-y-clip"
            v-for="l in navbarLinks"
            :key="l.label"
            :id="l.label"
          >
            <a
              :href="l.url"
              @click="gotoSectionAndClose(l.url)"
              class="group my-2 flex h-full w-fit translate-y-full cursor-pointer items-center justify-start leading-none will-change-auto"
            >
              <span
                class="bg-t-text h-4 w-4 scale-0 rounded-full opacity-0 transition-all duration-300 ease-in-out group-hover:scale-100 group-hover:opacity-100"
              ></span>
              <p
                class="font-fancy -translate-x-5 transition-all duration-300 ease-in-out group-hover:translate-x-5"
              >
                {{ l.label }}
              </p>
            </a>
          </li>
        </ul>
      </div>

      <div class="w-full">
        <div class="text-t-text mt-2 h-full font-normal">
          <p class="text-left text-sm font-bold uppercase">
            Yeshua The Messiah Mission
          </p>
          <p class="text-t-muted mt-1 text-sm">
            Winning Souls. Transforming Nations. Preparing the Way.
          </p>
          <div class="mt-6 flex flex-wrap justify-start gap-1">
            <Button
              class="contact border-t-border-2 border opacity-0"
              label="Vision 2030"
              url="#vision"
            />
            <Button
              class="contact border-t-border-2 border opacity-0"
              label="Our Network"
              url="#network"
            />
          </div>
        </div>
      </div>
    </div>
  </div>

  <header
    :class="$attrs.class"
    class="fixed top-0 left-0 right-0 z-20 -translate-y-full will-change-auto"
  >
    <div class="bg-t-bg/80 backdrop-blur-xl border-b border-t-border">
      <nav class="padding-x flex justify-between py-4">
      <MagneticEffect
        :magnetoStrengthVal="20"
        :magnetoTextStrengthVal="10"
        divId="name-container"
        textId="name"
      >
        <div
          id="name-container"
          class="group -m-5 h-fit cursor-pointer p-5 md:-m-10 md:p-10"
          @click="lenis.scrollTo('#app', { duration: 2 })"
        >
          <h2
            id="name"
            class="font-fancy flex items-start text-xl font-extrabold uppercase md:text-3xl"
          >
            YMM
            <span
              class="font-fancy inline! origin-center! text-xl transition-transform duration-500 ease-in-out group-hover:rotate-[360deg]"
              >✦</span
            >
          </h2>
        </div>
      </MagneticEffect>

      <div class="flex">
        <ul
          class="hidden w-full flex-1 gap-1 overflow-y-hidden text-lg font-medium md:flex md:gap-2 md:text-xl lg:gap-4 lg:text-2xl xl:text-3xl"
        >
          <Link
            v-for="(l, index) in navLinks"
            :key="l.label"
            tag="li"
            :label="l.label"
            :url="l.url"
          />
        </ul>
      </div>
    </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
  import { onMounted, ref, watch } from 'vue';
  import { Link, BurgerMenuBtn, MagneticEffect } from '..';
  import { Circles } from '../design';
  import { Button } from '../common';
  import {
    animateNavbarEnter,
    animateNavbarLeave,
    navbarScale,
  } from '@/animations';
  import { navbarLinks, navLinks } from '@/data';
  import { lenis } from '@/main';

  const isNavbarOpen = ref(false);

  const toggleBtnClickAnimation = () => {
    isNavbarOpen.value = !isNavbarOpen.value;
    document.getElementById('magneto')?.classList.toggle('active');

    const x = document.getElementById('navbar') as HTMLDivElement;
    if (isNavbarOpen.value) {
      animateNavbarEnter('#navbar', '#navLinks li a', '.contact');
      x.focus();
    } else {
      animateNavbarLeave('#navbar', '#navLinks li a', '.contact');
      x.blur();
    }
  };

  const gotoSectionAndClose = (url: string) => {
    lenis.start();
    lenis.scrollTo(url, { duration: 3 });
    toggleBtnClickAnimation();
  };

  onMounted(() => {
    navbarScale('#burger', '#hero');
  });

  const emit = defineEmits(['isLocked']);
  watch(isNavbarOpen, (newVal) => {
    emit('isLocked', newVal);
  });
</script>
