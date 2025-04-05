<script setup>
import Section from '@/components/sections/Section.vue';
import SectionHeader from '@/components/sections/SectionHeader.vue';
import SectionContent from '@/components/sections/SectionContent.vue';
import ArticleInfoBlock from '@/components/articles/ArticleInfoBlock.vue';
import SectionFooter from '@/components/sections/SectionFooter.vue';
const AboutImageSrc = "/images/logo/agency-logo.png";
const props = defineProps({
    id: String
});
</script>
<template>
    <Section :id="props.id">
        <SectionHeader
            title="*About* Template"
            subtitle="Get to know more about the project!" 
        />
        
        <SectionContent>
            <ArticleInfoBlock 
                :image="AboutImageSrc"
                :paragraphs="[
                    `<b>Ngoc Linh</b> created <em>Foxy</em>, a free Vue3 and Bootstrap5 theme. The downloadable files consist of the entire source code, including HTML, CSS, and Javascript. Please feel free to download and customize the theme as you wish.`,
                    `The template available on <a href='github.com'>GitHub</a> is a valuable resource for developers, as it provides a free and accessible solution for various projects. Hosted on the platform, the template allows users to easily access and utilize the source code, making it a convenient starting point for web development endeavors.`,
                    `With this template, you have the freedom to create custom sections, fill pre-existing ones with your own content, and personalize the colors, fonts, and much more to your liking. In case you encounter any challenges while attempting to customize or run this template, please feel free to reach out to me without any hesitation. I would be more than happy to extend my assistance and help you out in every possible way.`
                ]"/>
        </SectionContent>
        <SectionFooter title="Get it for *free!*"
            description="Do you want to use and/or customize this template? Feel free to clone it from the official Github repo!"
            button-url="https://github.com/Ngoc-Linh/Learn-Vuejs-Basic/tree/main/02.Examples/landing-page"
            button-label="Download Now"
            button-fa-icon="fa-solid fa-download"
            :include-divider="true"
         />
    </Section>
</template>
<style lang="scss" scoped>
</style>