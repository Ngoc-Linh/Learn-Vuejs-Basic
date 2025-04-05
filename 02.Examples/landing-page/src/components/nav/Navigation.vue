<script setup>
import InpageNavbar from './navbar-wrappers/InpageNavbar.vue';
import RouteNavbar from './navbar-wrappers/RouteNavbar.vue';
import {useRoute, useRouter} from "vue-router"
import {computed} from "vue";
import useLayout from '@/composables/useLayout';

const route = useRoute()
const router = useRouter()
const layout = useLayout()

const props = defineProps({
    logo: String,
    label: String
})

const shouldDisplayInPageNavBar = computed(() => {
    const routeInfo = router.getRoutes().find(r => r.name === route.name)
    if(!routeInfo || !routeInfo.props || !routeInfo.props.default)
        return true

    return routeInfo.props.default['inPageNavbar']
})
</script>
<template>
    <div class="navigation">
        <!-- In-page Navigation -->
        <InpageNavbar v-if="shouldDisplayInPageNavBar"
                      :logo="logo"
                      :label="label"/>
                      

        <!-- Router Navigation -->
        <RouteNavbar v-else
                     :logo="logo"
                     :label="label"/>
    </div>
</template>