<template>
  <MagneticEffect divId="magneto" textId="magnetoText">
    <div v-bind="$attrs" class="fixed right-[4.5rem] top-5 z-20 sm:right-[4.75rem] sm:top-6">
      <div
        id="magneto"
        class="flex-center size-14 cursor-pointer rounded-full bg-t-burger-bg brightness-90 ease-in-out lg:size-[4.5rem]"
      >
        <span
          class="w-[100%] text-center before:bg-t-burger-line after:bg-t-burger-line"
          id="magnetoText"
        ></span>
      </div>
    </div>
  </MagneticEffect>
</template>

<script setup lang="ts">
  import MagneticEffect from './MagneticEffect.vue';
</script>

<style scoped>
  #magnetoText::before,
  #magnetoText::after {
    width: 40%;
    content: ' ';
    display: block;
    height: 1px;
    position: relative;
    margin: auto;
    transition: all 0.3s ease-in-out;
  }

  #magnetoText::before {
    top: 5px;
  }

  #magnetoText::after {
    top: -5px;
  }

  .active #magnetoText::before {
    transform: rotate(-45deg);
    top: 0px;
  }

  .active #magnetoText::after {
    transform: rotate(45deg);
    top: -1px;
  }
</style>
