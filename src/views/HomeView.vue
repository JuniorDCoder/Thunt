<template>
  <BaseLayout class="">
    <div class="bg-[#F7F2FE] pb-0 overflow-hidden">
      <div class="flex flex-col px-5 md:flex-row md:px-28">
        <div class="flex flex-col w-full gap-4 mt-12 md:mt-24">
          <p class="text-[#24005F] text-xl md:text-2xl z-10">Your Perfect Tutor Finder</p>
          <h1 class="font-bold w-full md:w-[900px] z-10 text-4xl md:text-8xl">Find Your <span :key="animatedTextKey" class="custom-gradient animated-text">{{ animatedText }}</span><br class="md:hidden"> Tutor Now</h1>
          <p class="z-10 w-full text-lg md:w-3/4">Thunt is your go-to app for finding the perfect tutor. 
            Connect with experienced teachers who can 
            help you excel in your studies. Whether you 
            need help with Arts, Science, Technical or 
            Commercial education. Thunt has a tutor for you. Download the app today and start your learning journey!</p>
            <div class="flex w-full gap-2 md:flex-row md:gap-5">
              <DownloadBtn :imgSrc="playStoreImage" textLine1="GET IT NOW" textLine2="Google Play Store"/>
              <DownloadBtn :svgContent="appStoreSvg" svgFill="white" textLine1="DOWNLOAD ON THE" textLine2="App Store"/>
            </div>
        </div>
        <img src="../assets/images/person.png" class="z-10 w-full h-full mt-12 ml-16 md:ml-0 md:mt-32" alt="">
        
      </div>
      <div class="">
        <div class="absolute w-20 h-64 border-2 rounded-t-full bottom-0 left-[5%] md:left-[40%] bg-secondary"></div>
        <div class="absolute w-20 h-36 border-2 rounded-t-full bottom-0 left-[25%] md:left-[45%] bg-tertiary"></div>
        <div class="absolute w-20 h-96 border-2 rounded-t-full bottom-0 left-[45%] md:left-[50%] bg-quaternary"></div>
        <div class="absolute w-20 h-48 border-2 rounded-t-full bottom-0 left-[65%] md:left-[55%] bg-primary"></div>
      </div>
    </div>
    
  </BaseLayout>

</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import NavItem from '@/components/NavItem.vue';
import BaseLayout from '@/BaseLayout.vue';
import PrimaryButton from '@/components/PrimaryButton.vue';
import DownloadBtn from '@/components/DownloadBtn.vue';
import playStoreImage from '@/assets/images/playstore.png';

const appStoreSvg  = "M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z";

const animatedText = ref('Science');
const subjects = ['Science', 'Arts', 'General'];
let currentSubjectIndex = 0;

// Use a computed ref to change the key every time the text changes
const animatedTextKey = ref(Date.now());

const changeText = () => {
  currentSubjectIndex = (currentSubjectIndex + 1) % subjects.length;
  animatedText.value = subjects[currentSubjectIndex];
  animatedTextKey.value = Date.now(); // Update the key to force re-render
};

let intervalId;

onMounted(() => {
  intervalId = setInterval(changeText, 3000); // Change text every 3 seconds
});

onUnmounted(() => {
  clearInterval(intervalId);
});

</script>

<style>
.custom-gradient {
  background: linear-gradient(70.47deg, #5801E5 -38.62%, #E15636 68.01%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.animated-text {
  display: inline-block;
  animation: fallText 0.5s ease-out forwards; /* Adjusted duration and easing */
}
@keyframes fallText {
  0% {
    opacity: 0;
    transform: translateY(-50px); /* Increased starting Y position */
  }
  50% {
    opacity: 0.5;
    transform: translateY(-25px); /* Adjusted mid-animation Y position */
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

</style>