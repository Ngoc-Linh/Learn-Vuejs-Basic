<script setup>
const props = defineProps({
    type: String,
    label: String,
    icon: String,
    class: String,
})
</script>
<template>
    <button class="btn btn-primary btn-xl"
            :type="props.type || 'button'"
            :class="props.class">
        <i class="me-2" :class="props.icon"/>
        <span v-html="props.label"/>
    </button>
</template>
<style lang="scss" scoped>
    @import "../../scss/_theming.scss";
    button.btn-xl {
        @include generate-dynamic-styles-with-hash((
            xxxl: (padding: 1.125rem 2.3rem, font-size: 1.125rem),
            xxl:  (padding: 1rem 2rem, font-size: 1rem),
            lg:   (padding: 1rem 1.5rem, font-size: 0.9rem)
        ));

        border-radius: 4rem;
        font-weight: 400;
        font-family: $headings-font-family;
        text-transform: uppercase;
    }
</style>