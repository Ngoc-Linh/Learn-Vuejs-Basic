<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <header>
        <div class="container">
            <nav class="nav">
                <div class="branding">
                    <img src="../assets//logo.svg" alt="">
                    <h1>Today's Task</h1>
                </div>
                <ul class="nav-routes">
                    <li><router-link to="/">Home</router-link></li>
                    <li><router-link to="/about">About</router-link></li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<style lang="scss" scoped>
header {
    background-color: #f8f9fa;
    border-bottom: 1px solid #e9ecef;
    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 0;
        .branding {
            display: flex;
            align-items: center;
            img {
                width: 50px;
                height: 50px;
            }
            h1 {
                font-size: 1.5rem;
                margin-left: 1rem;
            }
        }
        .nav-routes {
            display: flex;
            li {
                margin-left: 1rem;
            }
        }
    }
}
</style>