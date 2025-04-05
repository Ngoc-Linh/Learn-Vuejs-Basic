<script setup>
import { inject } from 'vue';
import ProjectModal from './components/projects/ProjectModal.vue';
const projectModalTarget = inject("projectModalTarget");
const _onProjectModalClosed = () => {
    projectModalTarget.value = null
}
</script>
<template>
    <!-- Modals -->
    <ProjectModal :project="projectModalTarget"
                  @close="_onProjectModalClosed"/>
</template>
<style lang="scss" scoped>
@import "scss/_theming.scss";
</style>