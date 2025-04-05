<script setup>
import { ref, watch, computed } from 'vue';
import Spinner from '../widgets/Spinner.vue';
const props = defineProps({
    src: String,
    alt: String,
    class: String,
    spinnerEnabled: Boolean
})
const img = ref(null);
const loadStatus = {
    LOADING: 'loading', // image is loading
    LOADED: 'loaded', // image is loaded
    ERROR :'error' // image failed to load
}
const emit = defineEmits(["loaded", "error","completed"]);
const loadState = ref(loadStatus.LOADING);

const shouldShowSpinner = computed(() => {
    return loadState.value === loadStatus.LOADING;
});
const shouldShowFallback = computed(() => {
    return loadState.value === loadStatus.ERROR;
});
const shouldShowImage = computed(() => {
    return loadState.value === loadStatus.LOADED;
});
watch(() => props.src, (newSrc) => {
    if (newSrc) {
        loadState.value = loadStatus.LOADING;
        img.value.src = newSrc;
    }
});
const isLoading = () => {
    return loadState.value === loadStatus.LOADING;
}
const _onImageLoadSuccess = () => {
    loadState.value = loadStatus.LOADED;
    if(img.value) {
        img.value.setAttribute("load-status", loadStatus.LOADED);
    }
    emit("loaded");
    emit("completed");
}
const _onImageLoadError = () => {
    loadState.value = loadStatus.ERROR;
    if(img.value) {
        img.value.setAttribute("load-status", loadStatus.ERROR);
    }
    emit("error");
    emit("completed");
}
defineExpose({
    isLoading,
    loadState
});
</script>
<template>
    <div class="image-view" :class="props.class">
        <img class="image" ref="img" :src="src" :alt="alt" v-show="shouldShowImage" @load="_onImageLoadSuccess" @error="_onImageLoadError" />
        <Spinner v-if="props.spinnerEnabled" v-show="shouldShowSpinner" class="spinner" />
        <div v-if="shouldShowFallback"
             class="image-not-found-fallback">
            <i class="fa-solid fa-eye-slash" />
        </div>
    </div>
</template>
<style lang="scss" scoped>
@import "../../scss/theming.scss";
div.image-view {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
}

img.image {
    width: 100%;
    height: 100%;
}

img.spinner {
    position: absolute;
}

div.image-not-found-fallback {
    background-color: rgba(black, 0.2);
    border-radius: 20px;

    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    color: $light-2;
}
</style>