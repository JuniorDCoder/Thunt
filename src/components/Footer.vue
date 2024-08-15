<template>
    <div class="w-full bg-[#140B24] px-5 md:px-28 py-12">
        <hr class="w-full h-[1px] bg-[#F7F2FE]">
        <div class="flex flex-col items-center justify-between gap-4 py-16 md:py-32 md:gap-0 md:px-16 md:flex-row">
            <img src="../assets/images/footer-logo.png" alt="" class="w-[200px]">
            <div class="flex flex-col gap-4 md:px-0">
                <router-link to="/" class="flex flex-row items-center gap-3">
                    <img src="../assets/images/location.png" class="w-8 h-8" alt="">
                    <p class="text-[#F7F2FE] text-xl">Thunt, Traitz Tech Bambili</p>
                </router-link>
                <router-link to="/" class="flex flex-row items-center gap-3">
                    <img src="../assets/images/fax.png" class="w-8 h-8" alt="">
                    <p class="text-[#F7F2FE] text-xl">+237 680 692 014</p>
                </router-link>
                <router-link to="/" class="flex flex-row items-center gap-3">
                    <img src="../assets/images/fax.png" class="w-8 h-8" alt="">
                    <p class="text-[#F7F2FE] text-xl">+237 677 802 114</p>
                </router-link>
                <div class="flex flex-row items-center gap-5 mt-4">
                    <p class="text-[#F7F2FE] text-xl">Social Media</p>
                    <img src="../assets/images/facebook.png" class="w-8 h-8" alt="">
                    <img src="../assets/images/x.png" class="w-8 h-8" alt="">
                    <img src="../assets/images/ig.png" class="w-8 h-8" alt="">
                    <img src="../assets/images/linkedin.png" class="w-8 h-8" alt="">
                    <img src="../assets/images/google.png" class="w-8 h-8" alt="">
                </div>
            
            </div>
        </div>
        <hr class="w-full h-[1px] bg-[#F7F2FE] mb-6">
        <div class="flex flex-col justify-between gap-4 md:gap-0 m md:flex-row">
            <div class="flex flex-row gap-3 md:gap-6">
                <router-link to="/" class="text-[#F7F2FE] md:text-xl">HOME</router-link>
                <router-link :to="{name: 'about'}" class="text-[#F7F2FE] md:text-xl">ABOUT US</router-link> 
                <router-link :to="{ name: 'contact'}" class="text-[#F7F2FE] md:text-xl">CONTACT US</router-link>      
                <router-link to="" class="text-[#F7F2FE] md:text-xl">PRIVACY POLICY</router-link>
                         
            </div>
            <p class="text-[#F7F2FE] text-xl">Copyright @ {{ new Date().getFullYear() }} <a href="https://traitz.tech" target="_blank">Traitz Tech</a></p>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
*{
    overflow-x: hidden;
}
</style>