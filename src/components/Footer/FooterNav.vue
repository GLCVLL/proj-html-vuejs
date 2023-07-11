<script>
import SocialIcon from '../Header/SocialIcon.vue';
export default {
    components: { SocialIcon }
}
</script>

<template>
    <footer>
        <div class="container">
            <div class="row d-flex">
                <div class="col-sm-3">
                    <div class="footer-links">
                        <h4>Get In Touch</h4>
                        <p>Have a Question for us?</p>
                        <p>we'll answer your problem here</p>
                        <SocialIcon class="px-0" />
                    </div>
                </div>
                <div class="col-sm-2">
                    <div class="footer-links">
                        <h4>Support</h4>
                        <ul class="footer-list">
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Online Chat</a></li>
                            <li><a href="#">Whatsapp</a></li>
                            <li><a href="#">Telegram</a></li>
                            <li><a href="#">Snapchat</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-sm-2">
                    <div class="footer-links">
                        <h4>About</h4>
                        <ul class="footer-list">
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Career</a></li>
                            <li><a href="#">Job</a></li>
                            <li><a href="#">In press</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-sm-2">
                    <div class="footer-links">
                        <h4>Faq</h4>
                        <ul class="footer-list">
                            <li><a href="#">Account</a></li>
                            <li><a href="#">Order</a></li>
                            <li><a href="#">Dedelivery</a></li>
                            <li><a href="#">Payment</a></li>
                            <li><a href="#">Return</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-sm-3">
                    <div class="footer-links">
                        <h4>Contact Me</h4>
                        <div class="icon d-flex">
                            <font-awesome-icon :icon="['fas', 'location-arrow']" class="icon-color" />
                            <p>4500 Mercantile plaza,suite 300,fort worth,TX,76137,USA</p>
                        </div>
                        <div class="icon d-flex">
                            <font-awesome-icon :icon="['fas', 'phone']" class="icon-color" />
                            <p>+1(817)901 3377</p>
                        </div>
                        <div class="icon d-flex">
                            <font-awesome-icon :icon="['fas', 'envelope']" class="icon-color" />
                            <p>info@example.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <hr>
        <div class="copy text-center">
            <p>Copyright 2022 by <span>AttdogMilo.com</span></p>
        </div>
    </footer>
</template>

<style scoped lang="scss">
@use '../../assets/scss/_vars.scss' as *;

footer {
    background-color: black;
    padding: 150px 0 10px;
}

.footer-links {
    h4 {
        color: $bg-primary-color;
        padding: 0 0 15px;
        font-size: 20px;
    }

    p {
        padding: 0 0 15px;
        color: #b3b1b1;
    }
}

.footer-list {
    padding-left: 0;

    li {
        padding: 0 0 5px;
    }

    a {
        color: #b3b1b1;
        line-height: 25px;
        width: 100%;
    }
}

.icon {
    width: 100%;
    margin-bottom: 10px;
}

.icon-color {
    color: $bg-primary-color;
    margin-right: 10px;
    line-height: 35px;
    display: inline-block;
    padding: 0;
}

hr {
    color: white;
}

.copy {
    p {
        color: white;
    }
}
</style>