<script setup>
import useUtils from '@/composables/useUtils';
import { computed } from 'vue';
const props = defineProps({
    title: String,
    subtitle: String,
});
const utils = useUtils();
const parsedTitle = computed(() => {
    return utils.parseCustomText(props.title);
});
const parsedSubtitle = computed(() => {
    return utils.parseCustomText(props.subtitle);
});
</script>
<template>
     <div class="foxy-section-header">
        <h2 class="foxy-section-header-title" v-html="parsedTitle"/>
        <h5 class="foxy-section-header-subtitle pt-1" v-html="parsedSubtitle"/>
    </div>
</template>
<style lang="scss" scoped>
@import "../../scss/_theming.scss";
div.foxy-section-header {
    @include generate-dynamic-styles-with-hash((
        xxxl: (margin-bottom: 4rem),
        xxl:  (margin-bottom: 3rem),
        lg:   (margin-bottom: 3rem),
        md:   (margin-bottom: 2.75rem),
        sm:   (margin-bottom: 2.5rem),
    ));

    text-align: center;
}
h2 {
    text-transform: uppercase;
    color: inherit;
}

h5 {
    font-family: $font-family-base;
    color: $text-muted;
}
</style>