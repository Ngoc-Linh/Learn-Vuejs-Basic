<script setup>
import Header from '@/components/header/Header.vue';
import Footer from '@/components/footer/Footer.vue';
import FooterBlock from '@/components/footer/FooterBlock.vue';
import FooterColumn from '@/components/footer/FooterColumn.vue';
import FooterCopyright from '@/components/footer/FooterCopyright.vue';
import Navigation from '@/components/nav/Navigation.vue';
</script>
<template>
    <div class="wrapper">
        <Navigation logo="images/logo/agency-logo-small.png"
                label="*Foxy* Template"/>
        <Header 
        id="hero"
        title="*Foxy* Landing Page"
        subtitle="An agency template by <strong>ngoc linh</strong> – made with <strong>Vue3</strong> and <strong>Bootstrap 5</strong>"
        :showButton="true"
        buttonLabel="Find Out More"
        buttonIcon="fa-solid fa-search"
        buttonUrl="#about"
        />
        
        <main>
            <slot></slot>
        </main>
        <Footer id="footer">
            <FooterBlock :darken="false"
                     :row="true">
                     <FooterColumn title="About"
                          faIcon="fa-solid fa-pen-to-square me-1 d-none d-md-inline"
                          :description="[
                              `This template is maintained by Ryan Balieiro and is based on the <a href='https://getbootstrap.com/'>Bootstrap</a> framework and the <a href='https://vuejs.org/'>Vue</a> framework.`
                          ]"
                          :links="[
                              {label: `Privacy Policy`, href: `#`, faIcon: null},
                              {label: `License`, href: `#`, faIcon: null},
                              {label: `Github Repo`, href: `https://github.com/Ngoc-Linh/Learn-Vuejs-Basic/tree/main/02.Examples/landing-page`, faIcon: null},
                          ]"
                          :displayLinksAsButtons="false"/>

            <FooterColumn title="Connect With Us"
                          faIcon=""
                          :description="[
                          ]"
                          :links="[
                              {label: `Twitter`, href: `https://twitter.com`, faIcon:`fa-brands fa-twitter`},
                              {label: `TikTok`, href: `https://tiktok.com`, faIcon:`fa-brands fa-tiktok`},
                              {label: `Linkedin`, href: `https://linkedin.com`, faIcon:`fa-brands fa-linkedin`},
                              {label: `Spotify`, href: `https://spotify.com`, faIcon:`fa-brands fa-spotify`},
                          ]"
                          :displayLinksAsButtons="true"/>

            <FooterColumn title="Contact Info"
                          faIcon="fa fa-fax me-2"
                          :description="[
                              `Hải Châu District`,
                              `Đà Nẵng, Vietnam`,
                          ]"
                          :links="[
                              {label: `(342) 681 138`, href: `tel:+84342681138`, faIcon: 'fa-regular fa-bell'},
                              {label: `ngoclinh@gmail.com`, href: `mailto:ngoclinh@gmail.com`, faIcon: 'fa-regular fa-envelope'},
                          ]"
                          :displayLinksAsButtons="false"/>     
            </FooterBlock>
            <FooterBlock :darken="true"
                     :row="false">
            <FooterCopyright holder="Ngoc Linh"
                             url="https://github.com/Ngoc-Linh/Learn-Vuejs-Basic/"
                             license="Distributed Under the MIT License"/>
        </FooterBlock>
        </Footer>
    </div>
</template>
<style lang="scss" scoped>
</style>