<script setup>
import {onMounted, onUnmounted, ref, watch, inject } from 'vue';
import ImageView from '@/components/generic/ImageView.vue';
const props = defineProps({
    image: String,
    title: String,
    category: String,
    description: String,
    isShowing: Boolean,
    index: Number,
    transitionCount: Number,
    image: String,
    tags: Array,
    links: Array,
})
const isShowing = ref(false)
const imageView = ref(null)
const interval = ref(null)
const timeout = ref(null)

// function reset hiệu ứng xuất hiện, dừng mọi interval và timeout đang chạy
const _resetTransition = () => {
    isShowing.value = false; // dừng hiệu ứng xuất hiện
    clearInterval(interval.value); // dừng mọi interval đang chạy
    interval.value = null;// khởi tạo lại interval
    clearTimeout(timeout.value);
    timeout.value = null;
}
// hàm được gọi khi item được chọn, sẽ dừng hiệu ứng xuất hiện và bắt đầu hiệu ứng biến mất
const _scheduleTransition = () => {
    clearInterval(interval.value); 
    interval.value = null; 

    const index = props.index || 0; // lấy index của item hiện tại
    timeout.value = setTimeout(() => {
            isShowing.value = true; // bắt đầu hiệu ứng xuất hiện
            clearTimeout(timeout.value); // dừng timeout sau khi hiệu ứng xuất hiện
            timeout.value = null; // khởi tạo lại timeout
    }, 30 + index * 60); // delay 30ms + index * 60ms (để tạo hiệu ứng xuất hiện cho từng item)
}
// hàm check load completion, sẽ kiểm tra xem ảnh đã load xong chưa
// nếu đã load xong thì sẽ dừng interval và bắt đầu hiệu ứng xuất hiện
const _checkLoadCompletion = () => {
    interval.value = setInterval(()=> {
        if(imageView.value && imageView.value.isLoaded) {
            clearInterval(interval.value); // dừng interval khi ảnh đã load xong
            interval.value = null; // khởi tạo lại interval
            _scheduleTransition(); // bắt đầu hiệu ứng xuất hiện
        }
    }, 100 / 30); // kiểm tra mỗi 100ms/3 xem ảnh đã load xong chưa        
}
const _appear = () => {
    _checkLoadCompletion(); // kiểm tra xem ảnh đã load xong chưa
}
// hooks lifecycle của Vue.js
// khi component được mount thì gọi hàm _resetTransition và _appear
onMounted(() => {
    _resetTransition(); // gọi hàm _resetTransition khi component được mount
    _appear(); // gọi hàm _appear khi component được mount
})
// khi component bị unmount thì gọi hàm _resetTransition
// để dừng mọi interval và timeout đang chạy
onUnmounted(() => {
    _resetTransition(); // gọi hàm _resetTransition khi component bị unmount
})
// watch để theo dõi sự thay đổi của props.transitionCount
// khi props.transitionCount thay đổi thì gọi hàm _resetTransition và _appear
watch(() => props.transitionCount, () => {
    _resetTransition(); // gọi hàm _resetTransition khi transitionCount thay đổi
    _appear(); // gọi hàm _appear khi transitionCount thay đổi
})
// lấy giá trị projectModalTarget từ provided trong StateProvide.vue
const projectModalTarget = inject('projectModalTarget'); 
const _onItemSelected = () => {
    projectModalTarget.value = {
        title: props.title,
        description: props.description,
        category: props.category,
        tags: props.tags,
        links: props.links,
        image: props.image
    }
}
</script>
<template>
     <div class="foxy-project-item"
         :class="{
            'foxy-project-item-appear': !isShowing,
            'foxy-project-item-hidden': isShowing,
         }"
         @click="_onItemSelected">
        <div class="foxy-project-item-thumb-wrapper">
            <ImageView :src="props.image"
                       :alt="props.title"
                       :spinner-enabled="false"
                       ref="imageView"
                       class="foxy-project-item-thumb"/>

            <div class="foxy-project-item-thumb-overlay">
                <div class="foxy-project-item-thumb-overlay-content eq-h6">
                    <i class="fas fa-eye fa-2x"/>
                </div>
            </div>
        </div>

        <div class="foxy-project-item-description-wrapper">
            <button class="foxy-project-item-title"
                    v-html="props.title"/>

            <p class="foxy-project-item-category text-muted"
               v-html="props.category"/>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@import "../../../scss/_theming.scss";
div.foxy-project-item {
    display: inline-flex;
    flex-direction: column;
    position: relative;
    margin-top: calc(var(--project-logo-size)/3);
    cursor: pointer;

    &-hidden {
        opacity: 0;
    }

    &-appear {
        animation: appear 0.3s ease-out forwards;
    }
}

@keyframes appear {
    from {
        opacity:0;
        transform: scale(0.3) translateY(-30%);
    }
    to {
        opacity:1
    }
}

div.foxy-project-item-thumb-wrapper {
    position: relative;
    margin: 0 auto;
    cursor: pointer;
    height: var(--project-logo-size);
    width: var(--project-logo-size);
    overflow: hidden;
    border-radius: 25%;

    & .image-view {
        width: 100%;
        height: 100%;
    }
}

div.foxy-project-item-thumb-overlay {
    position: absolute;
    top: 0;
    opacity: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;
    border-radius: 25%;

    background: fade-out(lighten($primary, 5%), 0.1);
    transition: all ease-in-out 0.25s;

    &-content {
        color: $white;
    }
}

button.foxy-project-item-title {
    border: none;
    padding: 0;
    background-color: transparent;
    color: $dark;

    margin: calc(var(--project-logo-size)/12) 0 0;
    font-size: calc(var(--project-logo-size)/7.8);
    font-family: $headings-font-family;
    @include media-breakpoint-down(lg) {
        margin: calc(var(--project-logo-size)/12) 0 0;
        font-size: calc(var(--project-logo-size)/6.1);
    }
}

p.foxy-project-item-category {
    margin: 0;
    padding: 0;

    font-size: calc(var(--project-logo-size)/10.5);
    @include media-breakpoint-down(lg) {
        font-size: calc(var(--project-logo-size)/7.5);
    }
}

div.foxy-project-item:hover {
    div.foxy-project-item-thumb-overlay {
        opacity: 1;
    }

    button.foxy-project-item-title {
        color: lighten($primary, 10%);
        transition: color ease-in-out 0.3s;
    }
}

</style>