<template>
  <div class="bg-[#F7F2FE] w-full relative">
    <Header />

    <img v-if="isAboutPage" src="./assets/images/about-circle.png" alt="Description" class="absolute top-0 left-0 z-0 w-[500px]" />
    <img v-else src="./assets/images/circle.png" alt="Description" class="absolute top-0 right-0 z-0 w-[230px] md:w-[500px]" />
    <slot class="px-28 bg-[#F7F2FE]" />
  </div>

  <div class="absolute w-20 h-20 rounded-full z-5 bottom-44 md:bottom-10 left-7 md:left-24 bg-tertiary"></div>
  <div class="absolute z-0 w-20 h-20 border-2 rounded-full left-4 bottom-52 md:bottom-20 md:left-24 border-tertiary"></div>
  <div class="absolute w-20 h-20 border-2 rounded-full bottom-[23%] md:bottom-[8%] left-12 md:left-32 border-tertiary"></div>

  <Footer />
  <button v-show="isScrolled" @click="scrollToTop" class="fixed z-50 flex items-center justify-center w-20 h-20 p-5 text-4xl font-extrabold rounded-full bottom-8 right-9 bg-secondary text-primary">
    <img src="./assets/images/arrow.png" alt="" class="w-auto h-auto max-w-full max-h-full">
  </button>
</template>

<script setup>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const isAboutPage = ref(route.path === '/about');

watch(route, (newRoute) => {
  isAboutPage.value = newRoute.path === '/about';
});

const isScrolled = ref(false);

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

window.addEventListener('scroll', () => {
  isScrolled.value = window.scrollY > 0;
});
</script>

<style scoped>
/* Add your styles here */
</style>