<script setup>
import { computed } from 'vue';
import ImageView from '../generic/ImageView.vue';
import useUtils from '@/composables/useUtils';
import Link from '../generic/Link.vue';
import XLButton from '../widgets/XLButton.vue';
const heroSrc = "/images/logo/agency-logo.png";
const  utils = useUtils();
const parsedTitle = computed(() => {
    return utils.parseCustomText(props.title);
});
const parsedSubtitle = computed(() => {
    return utils.parseCustomText(props.subtitle);
});
const props = defineProps({
    title: String,
    subtitle: String,
    id: String, 
    showButton: Boolean,
    buttonLabel: String,
    buttonIcon: String,
    buttonUrl: String
});
</script>
<template>
    <header class="foxy-header" :id="id">
         <!-- Content -->
         <div class="container-xxl">
            <article class="foxy-hero-header">
                <!-- image -->
                <ImageView
                    class="foxy-hero-header-logo"
                    :alt="'Logo'"
                    :spinner-enabled="true"
                    :src="heroSrc"
                />
                <!-- text -->
                <h1 class="heading" v-html="parsedTitle" />
                <h4 class="subheading" v-html="parsedSubtitle" />
                <Link v-if="showButton" :url="props.buttonUrl" >
                    <XLButton :label="buttonLabel"
                              :icon="buttonIcon"
                              :class="`mt-4`"/>
                </Link>
            </article>
        </div>

    </header>
</template>
<style lang="scss" scoped>
@import "../../scss/_theming.scss";

header.foxy-header {
    --height: clamp(650px, 100vh, 1050px);
    --content-margin-top: 80px;
    --max-logo-proportion:45vw;
    --max-logo-height:50vh;
    @include media-breakpoint-down(xl) {--max-logo-height: 35vh;}
    @include media-breakpoint-down(lg) {--max-logo-height: 30vh; }
    @include media-breakpoint-down(md) {--content-margin-top: 65px;}

    --content-height: calc(var(--height) - var(--content-margin-top));
    --logo-proportion: clamp(190px, 45vw, min(37.5vh, 35vw, 350px));

    position: relative;
    height: var(--height);

    div.container-xxl {
        display: flex;
        align-items: center;
        justify-content: center;

        height: var(--height);
        padding-left: 1rem;
        padding-right: 1rem;
        padding-bottom: 2rem;
    }

    article.foxy-hero-header {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding-top:var(--content-margin-top);
    }

    div.foxy-hero-header-logo {
        height: var(--logo-proportion);
        width: var(--logo-proportion);
    }

    h1.heading {
        color:$white;
        text-transform: uppercase;
        font-weight: 700;
        font-size: calc(var(--logo-proportion)/6);
        padding: calc(var(--logo-proportion)/8) 0 calc(var(--logo-proportion)/180);
    }

    h4.subheading {
        font-family: $font-family-base;
        color: $light-5;

        font-size: clamp(16px, calc(var(--logo-proportion)/14), 100px);
        padding: calc(var(--logo-proportion)/20) 0;
        line-height: 24px;
        text-align: center;
    }
}
</style>