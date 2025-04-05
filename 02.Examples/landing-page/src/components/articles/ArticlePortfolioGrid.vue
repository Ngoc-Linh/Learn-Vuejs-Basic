<script setup>
import { computed, useSlots, ref } from 'vue';
import FilterTab from '../widgets/FilterTab.vue';
import useString from '@/composables/useString';

const slots = useSlots();
const items = computed(() => {
    return slots.default();
});
const string = useString();
const categories = computed(() => {
    return [string.get("all_categories"), ...new Set(items.value.map(item => item.props.category))].filter(category => category)
})


const selectedCategoryId = ref(null);
const refreshTimes = ref(0);

const _onCategorySelected = (categoryId) => {
    if (categoryId === selectedCategoryId.value) return;
    refreshTimes.value++;
    selectedCategoryId.value = categoryId;
};
 
const filteredItems = computed(() => {
    const allItems = items.value;
    if (!allItems || allItems.length === 0) return [];
        return allItems.filter(item => {
        return (
item.props.category === selectedCategoryId.value ||
!selectedCategoryId.value ||
selectedCategoryId.value === string.get('all_categories')
        );
    });
});
</script>
<template>
    <article class="foxy-project-grid-article row g-0 text-center">
        <!-- Filters category -->
        <div class="col-12 mb-2">
            <FilterTab :items="categories"
                        @selected="_onCategorySelected" />
        </div>
        <!-- Items -->
        <div class="col-12 foxy-project-grid-container">
            <div class="foxy-project-grid row mb-4">
                <div v-for="(item, index) in filteredItems"
                     :key="index"
                     class="foxy-project-grid-item-wrapper col-4 col-lg-3 text-center">
                    <component :is="item"
                               :index="index"
                               :transition-count="refreshTimes" />
                </div>
            </div>
        </div>
    </article>
</template>
<style lang="scss" scoped>
@import "../../scss/_theming.scss";

:root {
    --project-logo-size: min(clamp(140px, 20vh, 170px), clamp(140px, 10.5vw, 170px));
    @include media-breakpoint-down(lg) {
        --project-logo-size: min(clamp(80px, 20vh, 110px), clamp(70px, 20.5vw, 110px));
    }
}

div.foxy-project-grid {
    min-height: calc(var(--project-logo-size) * 3.5);
}
</style>