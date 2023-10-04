<script setup lang="ts">
// import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="wrapper"></div>
  <RouterView />
</template>

<style scoped>
@media (min-width: 1024px) {
  .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
