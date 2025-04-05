<script setup>
    import { useRoute } from 'vue-router';
    import { computed } from 'vue';
    import useLayout from '@/composables/useLayout';
    const router = useRoute();
    const layout = useLayout();
    const props = defineProps({
        url: String
    })
    const isRouterLink = computed(() => {
        return String(props.url).charAt(0) === '/';
    });
    const isHashLink = computed(() => {
        return String(props.url).charAt(0) === '#';
    });
    const isExternalLink = computed(() => {
        return String(props.url).includes('http') || String(props.url).includes('www');
    });
    // hàm xử lý sự kiện click cho các link có url là #,
    // khi click vào sẽ cuộn lên đầu trang
    const _onHashLinkClicked = () => {
        if(props.url === "#") {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            })
            window.location.hash = ''
            return
        }

        window.location.hash = props.url
        const sectionDiv = document.querySelector(props.url)
        if(sectionDiv) {
            layout.scrollIntoView(sectionDiv)
        }
    }
</script>
<template>
    <router-link v-if="isRouterLink"
                 :to="url">
        <slot></slot>
    </router-link>

    <button v-else-if="isHashLink"
            class="btn-link-wrapper"
            @click="_onHashLinkClicked">
        <slot></slot>
    </button>

    <a v-else-if="isExternalLink"
       class="btn-link-wrapper"
       :href="url"
       target="_blank">
        <slot></slot>
    </a>
</template>
<style lang="scss" scoped>
button.btn-link-wrapper {
    padding: 0;
    margin: 0;
    background: transparent;
    border: 0;
    outline: none;
    box-shadow: none;
}
</style>