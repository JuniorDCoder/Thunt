<template>
    <router-link to="/" class="z-10 flex flex-row items-center px-4 py-3 rounded-full cursor-pointer md:gap-2 md:px-12 purple-gradient">
      <!-- Conditionally render image or SVG -->
      <img v-if="imgSrc" :src="imgSrc" class="w-8 h-8" alt="">
      <template v-else-if="svgContent">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="w-10 h-10" :fill="svgFill">
          <path :d="svgContent" />
        </svg>
      </template>
      <div class="flex flex-col">
        <p class="hidden text-white md:block">{{ textLine1 }}</p>
        <p class="font-bold text-white md:text-xl">{{ textLine2 }}</p>
      </div>
    </router-link>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  
  const props = defineProps({
    imgSrc: String,
    svgContent: String,
    svgFill: {
      type: String,
      default: '#FFFFFF', // Default fill color for SVG
    },
    textLine1: {
      type: String,
      default: '', // Default text
    },
    textLine2: {
      type: String,
      default: 'Google Play', // Default text
    },
  });
  </script>

<style>
  .purple-gradient {
    background: linear-gradient(180deg, #190141 -38.62%, #140B24 68.01%);
  }
</style>