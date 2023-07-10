<script>
export default {

}
</script>

<template>
    <section>
        <div class="container social-media d-flex align-items-center justify-content-between">
            <div class="social-left d-flex align-items-center">
                <div class="our-email d-flex align-items-center mx-2">
                    <font-awesome-icon :icon="['fas', 'envelope']" />
                    <p class="mx-2">info@example.com</p>
                </div>
                <div class="our-tel-number d-flex align-items-center mx-2">
                    <font-awesome-icon :icon="['fas', 'phone']" />
                    <p class="mx-2">+1(817)901 3377</p>
                </div>
            </div>
            <div class="social-right d-flex align-items-center">
                <ul class="d-flex align-items-center">
                    <li><a href="#"><font-awesome-icon :icon="['fab', 'square-facebook']" size="xl" /></a></li>
                    <li><a href="#"><font-awesome-icon :icon="['fab', 'square-pinterest']" size="xl" /></a></li>
                    <li><a href="#"><font-awesome-icon :icon="['fab', 'square-twitter']" size="xl" /></a></li>
                    <li><a href="#"><font-awesome-icon :icon="['fab', 'linkedin']" size="xl" /></a></li>
                    <li><a href="#"><font-awesome-icon :icon="['fab', 'square-instagram']" size="xl" /></a></li>
                </ul>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
@use '../../assets/scss/_vars.scss' as *;

section {
    background-color: $bg-social-color;
}

.social-media {
    height: 60px;
}

.social-left,
.social-right,
.our-email,
.our-tel-number {
    height: 60px;
    color: $bg-primary-color;
}

p {
    color: white;
}

a {
    color: white;
    text-decoration: none;
    margin: 0 5px;
}
</style>