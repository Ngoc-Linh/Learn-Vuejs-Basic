<script setup>
import { computed } from 'vue';
import useUtils from '@/composables/useUtils';
import CircleIcon from '@/components/widgets/CircleIcon.vue';
const utils = useUtils();
const props = defineProps({
    title: String,
    description: String,
    faIcon: String
});
const parsedTitle = computed(() => {
    return utils.parseCustomText(props.title);
});
const parsedDescription = computed(() => {
    return utils.parseCustomText(props.description);
});
</script>
<template>
    <div class="foxy-item-feature col-12 col-md-6 col-lg-4">
        <div class="foxy-item-feature-content mb-lg-4">
            <div class="foxy-item-feature-icon-wrapper">
                <CircleIcon :fa-icon="faIcon"/>
            </div>

            <div class="foxy-item-feature-content-wrapper">
                <h5 v-html="parsedTitle" class="mb-1 mb-sm-2"/>

                <p class="text-muted text-4 mb-0"
                   v-html="parsedDescription"/>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@import "../../../scss/_theming.scss";

div.foxy-item-feature-content {
    @include generate-dynamic-styles-with-hash((
        xxxl: (flex-direction: column, padding: 0 1rem),
        lg:   (flex-direction: row, text-align:left, padding: 0 0.5rem),
        md:   (padding: 0)
    ));

    display: flex;
}

div.foxy-item-feature-content-wrapper {
    @include generate-dynamic-styles-with-hash((
        xxxl: (margin-top: 1rem),
        lg:   (margin-top: 0, margin-left: 1rem),
        md:   (margin-left: 0.75rem)
    ));
}
</style>