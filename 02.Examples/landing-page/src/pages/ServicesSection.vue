<script setup>
import Section from '@/components/sections/Section.vue';
import SectionHeader from '@/components/sections/SectionHeader.vue';
import SectionContent from '@/components/sections/SectionContent.vue';
import ArticleFeature from '@/components/articles/ArticleFeature.vue';
import ItemFeature from '@/components/articles/items/ItemFeature.vue';
const props = defineProps({
    id: String
});
</script>
<template>
    <Section :id="props.id" classList="foxy-section-primary">
        <SectionHeader
            title="Our *Services*"
            subtitle="This section can be used to describe what you offer!" />
        <SectionContent>
            <ArticleFeature>
                <ItemFeature title="Vue3"
                             fa-icon="fa-brands fa-vuejs"
                             description="This template is built using the Vue3 JavaScript framework, providing a modern and efficient development experience."/>

                <ItemFeature title="Responsive Design"
                             fa-icon="fa-solid fa-laptop"
                             description="This template is designed to adapt seamlessly to various screen sizes, providing a consistent user experience across devices."/>

                <ItemFeature title="Minimalist"
                             fa-icon="fa-solid fa-wand-magic"
                             description="This template features a clean and simple design, with a focus on essential elements, resulting in a modern and elegant look."/>

                <ItemFeature title="Fully Customizable"
                             fa-icon="fa-solid fa-hand-sparkles"
                             description="This template can be easily customized to match your brand's visual identity and requirements, giving you full control over the design and functionality."/>

                <ItemFeature title="Open Source"
                             fa-icon="fa-solid fa-code"
                             description="This template is open-source, meaning the code is publicly accessible and can be modified or redistributed without restrictions."/>

                <ItemFeature title="Lightweight"
                             fa-icon="fa-solid fa-feather"
                             description="This template is optimized for performance and speed, with a minimal codebase and minimal dependencies, resulting in a faster load time and improved user experience."/>
            </ArticleFeature>
        </SectionContent>
    
    </Section>
</template>
<style lang="scss" scoped>

</style>