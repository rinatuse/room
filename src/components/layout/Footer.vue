<template>
    <footer class="footer">
        <div class="container footer-container">
            <div class="footer-info">
                <h3>Имя Риелтора</h3>
                <p>Профессиональные риелторские услуги</p>
                <div class="contact-info">
                    <p><i class="pi pi-phone">+7 (900) 123-45-67</i></p>
                    <p><i class="pi pi-envelope"> email@example.com</i></p>
                    <p><i class="pi pi-map-marker"> г. Москва, ул. Примерная, д. 123</i></p>
                </div>
            </div>
            <div class="footer-links">
                <h4>Навигация</h4>
                <ul>
                    <li><a href="#about">Обо мне</a></li>
                    <li><a href="#services">Услуги</a></li>
                    <li><a href="#properties">Объекты</a></li>
                    <li><a href="#testimonials">Отзывы</a></li>
                    <li><a href="#contact">Контакы</a></li>
                </ul>
            </div>
            <div class="footer-social">
                <h4>Социальные сети</h4>
                <div class="social-icons">
                    <a href="#"><i class="pi pi-facebook"></i></a>
                    <a href="#"><i class="pi pi-instagram"></i></a>
                    <a href="#"><i class="pi pi-telegram"></i></a>
                    <a href="#"><i class="pi pi-whatsapp"></i></a></div>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="container">
                <p>&copy; {{ new Date().getFullYear() }} Все права защищены. Имя Риелтора</p>
            </div>
        </div>


    </footer>
</template>
<script setup lang="ts">

</script>
<style scoped>
.footer {
    background-color: #f8f9fa;
    padding: 3rem 0 0;
    margin-top: 3rem;
}

.footer-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
}

.contact-info p {
    margin: .5rem 0;
    display: flex;
    align-items: center;
    gap: .5rem;
}

.footer-links ul {
    list-style: none;
    padding: 0;
}

.footer-links li {
    margin-bottom: .5rem;
}

.footer-links a:hover {
    color: #007bff;
}

.social-icons {
    display: flex;
    gap: 1rem;
}

.social-icons a {
    color: #333;
    font-size: 1.5rem;
    transition: color .3s ease;
}

.social-icons a:hover {
    color: #007bff;
}

.footer-bottom {
    background-color: #e9ecef;
    padding: 1rem 0;
    margin-top: 3rem;
    text-align: center;
}
</style>