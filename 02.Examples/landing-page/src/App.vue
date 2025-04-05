<script setup>
import {RouterView } from 'vue-router'
import StateProvide from './StateProvide.vue';
import ContentLayout from './ContentLayout.vue';
</script>

<template>
  <!-- handle the state global -->
  <StateProvide>
    <!-- handle modal -->
    <ContentLayout />
    <RouterView />
    
  </StateProvide>
</template>

<style lang="scss" scoped>

</style>
