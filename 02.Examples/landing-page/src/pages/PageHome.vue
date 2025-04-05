<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import AboutSection from './AboutSection.vue';
import ServicesSection from './ServicesSection.vue';
import PortfolioSection from './PortfolioSection.vue';
import TeamSection from './TeamSection.vue';
</script>
<template>
    <DefaultLayout>
        <AboutSection id="about"/>
        <ServicesSection id="services"/>
        <PortfolioSection id="portfolio"/>
        <TeamSection id="team"/>
    </DefaultLayout>
</template>
<style lang="scss" scoped>
</style>