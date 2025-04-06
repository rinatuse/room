<template>
    <section class="hero-section">
        <div class="hero-content">
            <h1>Найдите дом своей мечты</h1>
            <p>Профессиональная помощь в покупке, продаже и аренде недвижимости</p>
            <Button label="Получить консультацию" icon="pi pi-comment" class="p-button-lg"></Button>
        </div>
    </section>
</template>
<script setup lang="ts">
import Button from 'primevue/button'
</script>
<style scoped>
.hero-section {
    height: 80vh;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/src/assets/images/hero-bg.jpg');
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    text-align: center;
}

.hero-content {
    max-width: 800px;
    padding: 2rem;
}

.hero-content h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
}

.hero-content p {
    font-size: 1.25rem;
    margin-bottom: 2rem;
}

@media (max-width: 768px) {
    .hero-section {
        height: 60vh;
    }

    .hero-content h1 {
        font-size: 2rem;
    }

    .hero-content p {
        font-size: 1rem;
    }
}
</style>