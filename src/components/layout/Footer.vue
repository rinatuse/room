<template>
    <footer class="footer">
        <div class="container footer-container">
            <div class="footer-info">
                <h3>Ваше Имя</h3>
                <p>Профессиональные риелторские услуги</p>
                <div class="contact-info">
                    <p><i class="pi pi-phone"></i> +7 (950) 454 00-00</p>
                    <p><i class="pi pi-envelope"></i> example@realestate.ru</p>
                    <p><i class="pi pi-map-marker"></i> г. Москва, ул. Примерная, д. 123</p>
                </div>
            </div>
            <div class="footer-links">
                <h4>Навигация</h4>
                <ul>
                    <li><a href="#about">Обо мне</a></li>
                    <li><a href="#services">Услуги</a></li>
                    <li><a href="#properties">Объекты</a></li>
                    <li><a href="#testimonials">Отзывы</a></li>
                    <li><a href="#contact">Контакты</a></li>
                </ul>
            </div>
            <div class="footer-services">
                <h4>Услуги</h4>
                <ul>
                    <li>Покупка недвижимости</li>
                    <li>Продажа недвижимости</li>
                    <li>Аренда жилья</li>
                    <li>Юридическое сопровождение</li>
                    <li>Ипотечный брокеридж</li>
                </ul>
            </div>
            <div class="footer-social">
                <h4>Социальные сети</h4>
                <div class="social-icons">
                    <a href="#" aria-label="Facebook"><i class="pi pi-facebook"></i></a>
                    <a href="#" aria-label="Instagram"><i class="pi pi-instagram"></i></a>
                    <a href="#" aria-label="Telegram"><i class="pi pi-telegram"></i></a>
                    <a href="#" aria-label="WhatsApp"><i class="pi pi-whatsapp"></i></a>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="container">
                <p>&copy; {{ new Date().getFullYear() }} Все права защищены. Ваше Имя</p>
            </div>
        </div>
    </footer>
</template>
<script setup lang="ts">

</script>
<style scoped>
.footer {
    background-color: #2c3e50;
    color: #fff;
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

.footer h3, .footer h4 {
    color: #fff;
    margin-bottom: 1.5rem;
    position: relative;
}

.footer h3::after, .footer h4::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    height: 2px;
    width: 50px;
    background-color: #3498db;
}

.contact-info p {
    margin: 0.8rem 0;
    display: flex;
    align-items: center;
    gap: 0.8rem;
    font-size: 0.95rem;
}

.contact-info i {
    color: #3498db;
    font-size: 1.2rem;
}

.footer-links ul, .footer-services ul {
    list-style: none;
    padding: 0;
}

.footer-links li, .footer-services li {
    margin-bottom: 0.8rem;
}

.footer-links a, .footer-services li {
    color: #ecf0f1;
    text-decoration: none;
    transition: color 0.3s ease;
    font-size: 0.95rem;
}

.footer-links a:hover {
    color: #3498db;
}

.social-icons {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
}

.social-icons a {
    color: #fff;
    font-size: 1.5rem;
    transition: color 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.1);
}

.social-icons a:hover {
    color: #3498db;
    background-color: rgba(255, 255, 255, 0.2);
}

.footer-bottom {
    background-color: #1a2530;
    padding: 1rem 0;
    margin-top: 3rem;
    text-align: center;
    font-size: 0.9rem;
}

@media (max-width: 768px) {
    .footer-container {
        grid-template-columns: 1fr;
        text-align: center;
    }
    
    .footer h3::after, .footer h4::after {
        left: 50%;
        transform: translateX(-50%);
    }
    
    .contact-info p {
        justify-content: center;
    }
    
    .social-icons {
        justify-content: center;
    }
}
</style>