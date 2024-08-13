<template>
    <button :class="buttonClasses">{{ buttonText }}</button>
</template>
  
<script setup>
  import { defineProps } from 'vue';
  
  const props = defineProps({
    buttonClasses: {
      type: String,
      default: ''
    },
    buttonText: {
      type: String,
      default: 'Click Me'
    }
  });
</script>
