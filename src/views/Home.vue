<template>
    <div class="home">
        <Header></Header>
        <HeroSection></HeroSection>
        <Footer></Footer>
    </div>
</template>

<script setup lang="ts">
import Header from '../components/layout/Header.vue';
import Footer from '../components/layout/Footer.vue';
import HeroSection from '../components/sections/HeroSection.vue';
</script>

<style>
.home {
    padding: 2rem;
    text-align: center;
}
</style>