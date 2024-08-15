<template>
  <div class="flex flex-row items-center justify-between px-4 py-5 border-b-2 md:px-28 border-b-primary">
    <!-- Hamburger Menu -->
    <div class="flex items-center mr-2 md:hidden">
      <button @click="toggleMenu" class="focus:outline-none">
        <!-- Hamburger Icon -->
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>
    </div>
    <router-link :to="{name: 'home'}" class="flex-grow md:flex-none">
      <PrimaryButton buttonClasses="text-primary p-2 rounded-full w-[120px] border border-primary" buttonText="Thunt" />
    </router-link>
    <!-- Navigation Links - Hidden on small screens -->
    <div class="hidden gap-6 md:flex"> 
      <NavItem to="/" linkText="Home" />
      <NavItem to="/about" linkText="About" />
      <NavItem to="/contact" linkText="Contact" />
    </div>
    <DownloadBtn text-line2="Download Now" class="mr-3 md:mr-0" />
    <!-- Mobile Navigation Links -->
    <transition name="slide-fade">
      <div v-if="menuOpen" class="absolute left-0 z-30 w-full shadow-md bg-[#F7F2FE] top-20 md:hidden">
        <div class="flex flex-col items-center gap-4 py-4">
          <NavItem to="/" linkText="Home" />
          <NavItem to="/about" linkText="About" />
          <NavItem to="/contact" linkText="Contact" />
        </div>
        <div class="flex flex-row items-center justify-center gap-4 px-5 py-4">
          <DownloadBtn :imgSrc="playStoreImage" textLine1="GET IT NOW" textLine2="Google Play Store"/>
          <DownloadBtn :svgContent="appStoreSvg" svgFill="white" textLine1="DOWNLOAD ON THE" textLine2="App Store"/>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import NavItem from '@/components/NavItem.vue';
import PrimaryButton from '@/components/PrimaryButton.vue';
import DownloadBtn from '@/components/DownloadBtn.vue';
import playStoreImage from '@/assets/images/playstore.png';

const appStoreSvg  = "M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z";


const menuOpen = ref(false);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};
</script>

<style scoped>
.slide-fade-enter-active, .slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-enter-from, .slide-fade-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}
</style>