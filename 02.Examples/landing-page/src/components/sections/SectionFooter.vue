<script setup>
import { computed } from 'vue';
import useUtils from '@/composables/useUtils';
import Link from '../generic/Link.vue';
import XLButton from '../widgets/XLButton.vue';
import Divider from '../widgets/Divider.vue';
const utils = useUtils();
const props = defineProps({
    title: String,
    description: String,
    descriptionTextClass: String,
    buttonLabel: String,
    buttonUrl: String, 
    buttonFaIcon: String,
    includeDivider: {
        type: Boolean,
        default: false
    }
});
const parsedTitle = computed(() => {
    return utils.parseCustomText(props.title);
});
const parsedDescription = computed(() => {
    return utils.parseCustomText(props.description);
});

</script>
<template>
    <div class="foxy-section-footer">
        <div class="row">
            <div class="foxy-section-footer-content col-12 col-lg-8">
                <Divider v-if="includeDivider" class="mb-4" />

                <!-- Title -->
                <h3 v-html="parsedTitle"/>
                <!-- Description -->
                <p v-if="description"
                   v-html="parsedDescription"
                   class="mt-3 mb-2 text-4"
                   :class="descriptionTextClass" />
                
                <!-- button -->
                <Link :url="buttonUrl">
                    <XLButton :label="buttonLabel"
                              :icon="buttonFaIcon"
                              :class="`mt-4`"/>
                </Link>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@import "../../scss/_theming.scss";
div.foxy-section-footer {
    @include generate-dynamic-styles-with-hash((
        xxxl: (margin-top: 2rem),
        xxl:  (margin-top: 1.5rem),
        lg:   (margin-top: 1.1rem),
        md:   (margin-top: 1.05rem),
        sm:   (margin-top: 0.75rem),
    ));

    text-align: center;
}

div.foxy-section-footer-content {
    text-align: center;
    margin: 0 auto;
}
</style>