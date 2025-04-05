<script setup></script>
<template>
    <article class="foxy-features-article row">
        <slot></slot>>
    </article>
</template>
<style lang="scss" scoped>
@import "../../scss/_theming.scss";

article.foxy-features-article {
    text-align: center;
    row-gap: 35px;
    @include media-breakpoint-down(lg) {
        row-gap: 30px;
    }
}
</style>