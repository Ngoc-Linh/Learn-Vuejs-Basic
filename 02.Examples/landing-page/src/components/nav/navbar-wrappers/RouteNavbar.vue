<script setup>
import Navbar from '../navbar/Navbar.vue';
import {computed} from "vue"
import {useRoute, useRouter} from "vue-router"

const route = useRoute()
const router = useRouter()

const props = defineProps({
    logo: String,
    label: String
})

const linkList = computed(() => {
    return router.getRoutes()
        .map(r => {return {
            path: r.path,
            label: r?.props?.default?.label || r.name,
            faIcon: r?.props?.default?.faIcon || 'fa-solid fa-circle',
            isActive: route.path === r.path
        }})
        .filter(r => {
            return r.label
        })
})
</script>
<template>
     <Navbar :brand-logo="logo"
            :brand-label="label"
            brand-url="/"
            :link-list="linkList"
            :expandable="false"/>
</template>
<style lang="scss" scoped>
</style>