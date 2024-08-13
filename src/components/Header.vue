<template>
    <div class="flex flex-row items-center justify-between py-5 border-b-2 px-28 border-b-primary">
        <router-link :to="{name: 'home'}">
            <PrimaryButton buttonClasses="text-primary p-2 rounded-full w-[120px] border border-primary" buttonText="Thunt" />
        </router-link>
        <div class="flex gap-6"> 
          <NavItem to="/" linkText="Home" />
          <NavItem to="/about" linkText="About" />
          <NavItem to="/contact" linkText="Contact" />
        </div>
        <router-link to="/" class="flex items-center gap-4">
          <p class="text-primary">Login</p>
          <img src="../assets/images/user.png" class="w-12 h-12 p-2 border-2 rounded-full border-primary" alt="">
        </router-link>
    </div>
  </template>
  
  <script setup>

  import { RouterLink } from 'vue-router';
  import NavItem from '@/components/NavItem.vue';
  import PrimaryButton from '@/components/PrimaryButton.vue';
  </script>