<script setup>
import { ref, provide } from 'vue';
// sử dụng provide để cung cấp một giá trị cho các component con
const projectModalTarget = ref(null);
provide('projectModalTarget', projectModalTarget);
const currentPageSections = ref([
    { id: 1, name: 'About', hash: '#about'},
    { id: 2, name: 'Services', hash: '#services' },
    { id: 3, name: 'Portfolio', hash: '#portfolio'},
    { id: 4, name: 'Team', hash: '#team'}
]);
provide("currentPageSections", currentPageSections)
</script>
<template>
    <slot></slot>
</template>
<style></style>