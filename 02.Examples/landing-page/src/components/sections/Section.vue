<script setup>
const props = defineProps({
    id: String,
    classList: String
})
</script>
<template>
    <section class="foxy-section" :id="id" :class="classList">
        <div class="container-xxl">
            <slot></slot>
        </div>
    </section>
</template>
<style lang="scss" scoped>
@import "../../scss/_theming.scss";
section.foxy-section {
    @include generate-dynamic-styles-with-hash((
        xxxl: (padding: 4rem 0em 5rem),
        xxl:  (padding: 3rem 0rem 3.5rem),
        lg:   (padding: 2.5rem 0rem 3.5rem),
        md:   (padding: 2.25rem 0rem 3.25rem),
        sm:   (padding: 2rem 0rem 3rem),
    ));

    background-color: $background-color;
    position: relative;

    .foxy-promo-background {
        display: block;
        margin-top: -4rem;
    }
}

section.foxy-section-primary {
    background-color: lighten($primary, 42%);
}

section.foxy-section-dark {
    background-color: lighten($dark, 10%);
    color: $text-normal-contrast;

    h5.foxy-section-header-subtitle {
        color: $light-5;
    }
}

section.foxy-section-promo {
    background-color: transparent;
}
</style>