<template>
    <header class="header">
        <div class="container header-container">
            <div class="logo">
                <h1>Имя Риелтора</h1>
            </div>
            <div class="mobile-menu-toggle" @click="isMobileMenuOpen = !isMobileMenuOpen">
                <i class="pi" :class="isMobileMenuOpen ? 'pi-times' : 'pi-bars'"></i>
            </div>
            <nav class="nav" :class="{'active': isMobileMenuOpen }">
                <ul class="nav-list">
                    <li><a href="#about" @click="closeMobileMenu">Обо мне</a></li>
                    <li><a href="#services" @click="closeMobileMenu">Услуги</a></li>
                    <li><a href="#properies" @click="closeMobileMenu">Объекты</a></li>
                    <li><a href="#testimonials" @click="closeMobileMenu">Отзывы</a></li>
                    <li><a href="#contact" @click="closeMobileMenu">Контакты</a></li>
                </ul>
            </nav>
            <div class="contact-phone"><a href="tel:+79504540000">+7 (950) 454 00-00</a></div>
            <Button label="Связаться" icon="pi pi-phone" class="p-button-primary" @click="scrollToContact"></Button>
        </div>
    </header>
</template>
<script setup lang="ts">
import {ref} from 'vue'
import  Button  from 'primevue/button'

const isMobileMenuOpen = ref(false)

const closeMobileMenu = () => {
    isMobileMenuOpen.value = false;
}

const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
        contactSection.scrollIntoView({behavior: 'smooth'});
    }
    closeMobileMenu()
}


</script>
<style scoped>
.header {
        padding: 1rem 0;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        background-color: #fff;
        z-index: 1000;
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

.logo {
    display: flex;
    flex-direction: column;
}

.logo h1 {
    font-size: 1.5rem;
    margin: 0;
    color: #007bff;
}

.tagline {
    font-size: 0.8rem;
    color: #666;
    margin: 0;
}

.nav-list {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    gap: 1.5rem;
}

.nav-list a {
    text-decoration: none;
    color: #333;
    font-weight: 500;
    transition: color .3s ease;
    font-size: 1rem;
}

.nav-list a:hover {
    color: #007bff;
}

.contact-phone a {
    text-decoration: none;
    color: #333;
    font-weight: 700;
    font-size: 1.1rem;
}

.mobile-menu-toggle {
    display: none;
    cursor: pointer;
    font-size: 1.5rem;
}
@media (max-width: 768px) {
    .header-container {
        flex-wrap: wrap;
        padding: 0.5rem 1rem;
    }

    .mobile-menu-toggle {
        display: block;
        order: 3;
    }

    .nav {
        flex-basis: 100%;
        order: 4;
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.3s ease;
    }

    .nav.active {
        max-height: 300px;
    }

    .nav-list {
        flex-direction: column;
        align-items: center;
        padding: 1rem 0;
        gap: 1rem;
    }

    .logo {
        order: 1;
    }
    
    .logo h1 {
        font-size: 1.2rem;
    }

    Button {
        order: 2;
        font-size: 0.8rem;
        padding: 0.4rem 0.8rem;
    }
}
</style>