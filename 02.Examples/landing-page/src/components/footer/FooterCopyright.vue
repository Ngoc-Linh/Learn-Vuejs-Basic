<script setup>
import {computed} from "vue"
import useString from "@/composables/useString";
const strings = useString();
const props = defineProps({
    holder: String,
    url: String,
    license: String,
})

const formattedCopyright = computed(() => {
    return strings.getCopyrightMessage(
        new Date().getFullYear().toString(),
        props.holder,
        props.url,
        props.license
    )
})
</script>
<template>
    <p class="foxy-footer-copyright text-1"
    v-html="formattedCopyright"/>
</template>
<style lang="scss" scoped>
@import "../../scss/_theming.scss";
p {
    color: $light-5;
    padding: 0;
    margin: 0;
}
</style>