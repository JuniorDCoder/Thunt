<template>
    <div class="w-full bg-[#140B24] px-28 py-12">
        <hr class="w-full h-[1px] bg-[#F7F2FE]">
        <div class="flex flex-row items-center justify-between px-16 py-32">
            <img src="../assets/images/footer-logo.png" alt="">
            <div class="flex flex-col gap-4">
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
        <div class="flex flex-row justify-between">
            <div class="flex flex-row gap-6">
                <router-link to="/" class="text-[#F7F2FE] text-xl">HOME</router-link>
                <router-link :to="{name: 'about'}" class="text-[#F7F2FE] text-xl">ABOUT US</router-link> 
                <router-link to="" class="text-[#F7F2FE] text-xl">CONTACT US</router-link>      
                <router-link to="" class="text-[#F7F2FE] text-xl">PRIVACY POLICY</router-link>
                <router-link to="" class="text-[#F7F2FE] text-xl">LOGIN</router-link>
                         
            </div>
            <p class="text-[#F7F2FE] text-xl">Copyright @ {{ new Date().getFullYear() }} <a href="https://traitz.tech" target="_blank">Traitz Tech</a></p>
        </div>
    </div>
</template>

<script setup>
</script>