<template>
    <div class="bg-[#F7F2FE] relative">
        <Header />

        <img v-if="isAboutPage" src="./assets/images/about-circle.png" alt="Description" class="absolute top-0 left-0 z-0 w-[500px]" />
        <img v-else src="./assets/images/circle.png" alt="Description" class="absolute top-0 right-0 z-0 w-[500px]" />
        <slot class="px-28 bg-[#F7F2FE]" />
        
    </div>
    
    <div class="absolute z-10 w-20 h-20 rounded-full bottom-10 left-24 bg-tertiary"></div>
    <div class="absolute z-0 w-20 h-20 bg-white border-2 rounded-full bottom-20 left-24 border-tertiary"></div>
    <div class="absolute w-20 h-20 bg-white border-2 rounded-full bottom-24 left-32 border-tertiary"></div>

    <Footer />
</template>

<script setup>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

import { useRoute } from 'vue-router';

const route = useRoute();
const isAboutPage = route.path === '/about';
</script>