<script setup>
import { RouterLink, RouterView } from 'vue-router'
 defineProps({
    to:{
        type: String
    }
 })
</script>

<template>
  <RouterLink
    :to="{name: to}"
    class="rouded bg-green-400 hove:bg-green-500 font-bold py-2 px-10">
    
    
    <slot></slot>
  </RouterLink>
</template>
