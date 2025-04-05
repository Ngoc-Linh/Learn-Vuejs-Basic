<script setup>
import Section from '@/components/sections/Section.vue';
import SectionHeader from '@/components/sections/SectionHeader.vue';
import SectionContent from '@/components/sections/SectionContent.vue';
import SectionFooter from '@/components/sections/SectionFooter.vue';
import ArticlePortfolioGrid from '@/components/articles/ArticlePortfolioGrid.vue';
import ItemPortfolioGrid from '@/components/articles/items/ItemPortfolioGrid.vue';
const props = defineProps({
    id: String
});
</script>
<template>
    <Section :id="props.id">
        <SectionHeader
            title="Our *Portfolio*"
            subtitle="Get to know our amazing projects!" />
        <SectionContent>
            <ArticlePortfolioGrid>
                <ItemPortfolioGrid title="SmartCash"
                                 category="Utilities"
                                 :description="`<b>SmartCash</b> is your smart companion for personal finance, empowering you to take control of your money effortlessly. With its user-friendly interface, SmartCash provides real-time tracking of your expenses and income, enabling you to identify spending patterns and make informed financial decisions. Stay on top of your budget as SmartCash offers personalized recommendations to save money and achieve your financial goals without compromising your lifestyle.`"
                                 image="images/portfolio/project-logo-1.png"
                                 :tags="['app', 'finance', 'money', 'budget']"
                                 :links="[
                                    { faIcon: 'fa-brands fa-apple', href: 'https://apple.com' },
                                    { faIcon: 'fa-brands fa-google-play', href: 'https://googleplay.com' },
                                    { faIcon: 'fa-brands fa-windows', href: 'https://windows.com' }
                                 ]"
                />

                <ItemPortfolioGrid title="Snappy"
                                 category="Utilities"
                                 :description="`<b>Snappy</b> is your ultimate photography app, empowering you to capture and edit stunning images effortlessly. With its intuitive interface, Snappy provides a wide range of powerful tools and filters to enhance your photos and bring out your creativity. Whether you're a professional photographer or just a hobbyist, Snappy offers features like manual controls, advanced editing options, and AI-powered enhancements to take your photography to the next level.`"
                                 image="images/portfolio/project-logo-2.png"
                                 :tags="['app', 'photography', 'camera']"
                                 :links="[
                                    { faIcon: 'fa-brands fa-apple', href: 'https://apple.com' },
                                    { faIcon: 'fa-brands fa-google-play', href: 'https://googleplay.com' }
                                 ]"
                />

                <ItemPortfolioGrid title="BrainPulse"
                                 category="Utilities"
                                 :description="`<b>BrainPulse</b> is your ultimate brain training app, empowering you to boost cognitive abilities effortlessly. With its engaging interface, BrainPulse offers a variety of stimulating games and exercises designed to enhance memory, attention, problem-solving, and more. Track your progress and challenge yourself to reach new mental heights with personalized training programs tailored to your specific needs and goals.`"
                                 image="images/portfolio/project-logo-3.png"
                                 :tags="['app', 'brain', 'training']"
                                 :links="[
                                    { faIcon: 'fa-brands fa-apple', href: 'https://apple.com' },
                                    { faIcon: 'fa-brands fa-google-play', href: 'https://googleplay.com' },
                                    { faIcon: 'fa-brands fa-windows', href: 'https://windows.com' }
                                 ]"
                />

                <ItemPortfolioGrid title="Stackers"
                                 category="Productivity"
                                 :description="`<b>Stackers</b> is your ultimate productivity app, empowering you to stay organized and focused effortlessly. With its intuitive and streamlined interface, Stackers offers a variety of tools to help you manage tasks, notes, and projects effectively. Create to-do lists, set reminders, and collaborate with teammates to achieve your goals seamlessly. Take control of your time and boost your productivity with Stackers as your reliable productivity companion.`"
                                 image="images/portfolio/project-logo-6.png"
                                 :tags="['app', 'productivity', 'organization', 'tasks']"
                                 :links="[
                                    { faIcon: 'fa-brands fa-apple', href: 'https://apple.com' },
                                    { faIcon: 'fa-brands fa-google-play', href: 'https://googleplay.com' },
                                    { faIcon: 'fa-brands fa-windows', href: 'https://windows.com' },
                                    { faIcon: 'fa-brands fa-amazon', href: 'https://amazon.com' }
                                 ]"
                />

                <ItemPortfolioGrid title="LiveScore Pro"
                                 category="Utilities"
                                 :description="`Stay ahead of the game with <b>LiveScore Pro</b>! Get real-time football scores, goal updates, and match results from leagues worldwide. Never miss a moment of the action!`"
                                 image="images/portfolio/project-logo-4.png"
                                 :tags="['soccer', 'scores', 'sports', 'results']"
                                 :links="[
                                    { faIcon: 'fa-brands fa-apple', href: 'https://apple.com' },
                                    { faIcon: 'fa-brands fa-google-play', href: 'https://googleplay.com' },
                                    { faIcon: 'fa-brands fa-windows', href: 'https://windows.com' }
                                 ]"
                />

                <ItemPortfolioGrid title="Sweet Scoops"
                                 category="Social"
                                 :description="`<b>Sweet Scoops</b> is your delightful companion for exploring the world of ice creams. With its mouthwatering interface, SweetScoops offers a wide selection of ice cream flavors, recipes, and unique combinations to tickle your taste buds. Whether you're an ice cream enthusiast or a connoisseur, SweetScoops allows you to discover new flavors, find nearby ice cream parlors, and even create your personalized ice cream masterpieces.`"
                                 image="images/portfolio/project-logo-5.png"
                                 :tags="['app', 'food', 'ice cream', 'dessert']"
                                 :links="[
                                    { faIcon: 'fa-brands fa-apple', href: 'https://apple.com' },
                                    { faIcon: 'fa-brands fa-google-play', href: 'https://googleplay.com' },
                                    { faIcon: 'fa-brands fa-windows', href: 'https://windows.com' }
                                 ]"
                />

                <ItemPortfolioGrid title="MailM8"
                                 category="Productivity"
                                 :description="`<b>MailM8</b> is your reliable mailing app, empowering you to manage your emails efficiently. With its sleek and user-friendly interface, MailM8 offers features like intuitive organization, smart filters, and seamless integration with other productivity tools. Stay on top of your inbox, draft emails effortlessly, and boost your productivity with MailM8 as your trusty email companion.`"
                                 image="images/portfolio/project-logo-7.png"
                                 :tags="['app', 'mail', 'email', 'productivity']"
                                 :links="[
                                    { faIcon: 'fa-brands fa-apple', href: 'https://apple.com' },
                                    { faIcon: 'fa-brands fa-google-play', href: 'https://googleplay.com' },
                                    { faIcon: 'fa-brands fa-windows', href: 'https://windows.com' },
                                    { faIcon: 'fa-brands fa-chrome', href: 'https://chrome.com' }
                                 ]"
                />

                <ItemPortfolioGrid title="RockVerse"
                                 category="Social"
                                 :description="`<b>RockVerse</b> is your gateway to a mesmerizing world of rock'n roll, empowering you to immerse yourself in the essence of rock effortlessly. With its dynamic and immersive interface, RockVerse offers an extensive library of iconic rock songs, legendary albums, and captivating rock artists. Unearth rare footage, delve into the history of rock, and experience mind-blowing live performances of your favorite bands. Connect with a vibrant community of rock enthusiasts, share your playlists, and embark on a legendary musical journey with RockVerse as your ultimate rock music haven.`"
                                 image="images/portfolio/project-logo-9.png"
                                 :tags="['app', 'rock', 'music', 'bands']"
                                 :links="[
                                    { faIcon: 'fa-brands fa-apple', href: 'https://apple.com' },
                                    { faIcon: 'fa-brands fa-google-play', href: 'https://googleplay.com' }
                                 ]"
                />
            </ArticlePortfolioGrid>
        </SectionContent>
        <SectionFooter/>
        <SectionFooter
            title="Work with us and *save money*"
            description="Want a quote for the project budget? Reach out to us, and we'll promptly provide the information you need. Our team is here to assist you in any way we can!"
            :include-divider="true"
            button-label="Contact Us!"
            button-fa-icon="fa-solid fa-message"
            button-url="#footer"/>
    </Section>
</template>
<style lang="scss" scoped>
@import '../scss/_theming.scss'
</style>