<script setup>
import { computed } from 'vue';
import SocialLink from '../widgets/SocialLink.vue';
import useUtils from '@/composables/useUtils';
import useString from '@/composables/useString';

const utils = useUtils();
const strings = useString();
const props = defineProps({ // Changed from defaultProps to defineProps
    title: String,
    description: String,
    tags: Array,
    links: Array
});

const parsedTitle = computed(() => {
    return utils.parseCustomText(props.title);
});
const parsedDescription = computed(() => {
    return utils.parseCustomText(props.description);
});
</script>
<template>
    <div class="foxy-project-info-content">
        <!-- Title -->
        <h2 class="mb-3"
            v-html="parsedTitle"/>

        <!-- Tags Label -->
        <span class="me-2 text-3" v-if="props.tags">
            <i class="fa fa-tag me-1"/>
            {{ strings.get('tags') }}
        </span>

        <!-- Tag List -->
        <div class="d-inline-block" v-if="props.tags">
            <span v-for="tag in props.tags"
                  class="badge bg-primary me-1 text-1">
                {{ tag }}
            </span>
        </div>

        <!-- About -->
        <div class="mt-4" v-if="props.description">
            <h5 class="d-none d-lg-inline-block lead-2">
                <i class="fa fa-file me-1"/>
                {{ strings.get('about') }}
            </h5>

            <p class="text-4"
               v-html="parsedDescription"/>
        </div>

        <!-- Links -->
        <div class="mt-4" v-if="props.links">
            <h5 class="lead-2">
                <i class="fa fa-external-link me-1"/>
                {{ strings.get('where_to_find') }}
            </h5>

            <p class="text-4"
               v-html="strings.get('project_available_here', [
                  {key: 'title', replacement: parsedTitle}
               ])"
            />

            <SocialLink v-if="props.links"
                         :items="props.links"
                         size="3"
                         variant="black"/>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@import "../../scss/_theming.scss";
</style>