<template>
    <router-link :to="to" custom v-slot="{ navigate, isActive }">
      <a
        :class="[
          'px-9 py-2 cursor-pointer transition-colors duration-300 rounded-full',
          isActive ? 'bg-primary text-white' : 'bg-[#FFFFFF] text-primary'
        ]"
        @click="navigate"
      >
        {{ linkText }}
      </a>
    </router-link>
  </template>
  
<script setup>
  import { defineProps } from 'vue';
  
  const props = defineProps({
    to: {
      type: String,
      required: true
    },
    linkText: {
      type: String,
      default: 'Link'
    }
  });
</script>

