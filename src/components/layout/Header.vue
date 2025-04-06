<template>
    <header class="header">
        <div class="container header-container">
            <div class="logo">
                <h1>Имя Риелтора</h1>
            </div>
            <nav class="nav">
                <ul class="nav-list">
                    <li><a href="#about">Обо мне</a></li>
                    <li><a href="#services">Услуги</a></li>
                    <li><a href="#properies">Объекты</a></li>
                    <li><a href="#testimonials">Отзывы</a></li>
                    <li><a href="#contact">Контакты</a></li>
                </ul>
            </nav>
            <div class="contact-phone"><a href="tel:+79504540000">+7 (950) 454 00-00</a></div>
            <Button label="Связаться" icon="pi pi-phone" class="p-button-primary"></Button>
        </div>
    </header>
</template>
<script setup lang="ts">
import  Button  from 'primevue/button';
</script>
<style scoped>
.header {
        padding: 1rem 0;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

.header-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
}

.nav-list a {
    text-decoration: none;
    color: #333;
    font-weight: 500;
    transition: color .3s ease;
}

.nav-list a:hover {
    color: #007bff;
}

@media (max-width: 768px) {
    .header-container {
        flex-direction: column;
        gap: 1rem;
    }

    .nav-list {
        flex-direction: column;
        align-items: center;
        gap: .5rem;
    }
}
</style>