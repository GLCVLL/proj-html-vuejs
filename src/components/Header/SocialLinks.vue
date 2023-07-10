<script>
import SocialIcon from './SocialIcon.vue'
export default {
    components: { SocialIcon }
}
</script>

<template>
    <section>
        <div class="container social-media d-flex align-items-center justify-content-between">
            <div class="social-left d-flex align-items-center">
                <div class="our-email d-flex align-items-center mx-2">
                    <font-awesome-icon :icon="['fas', 'envelope']" />
                    <p>info@example.com</p>
                </div>
                <div class="our-tel-number d-flex align-items-center mx-2">
                    <font-awesome-icon :icon="['fas', 'phone']" />
                    <p>+1(817)901 3377</p>
                </div>
            </div>
            <div class="social-right d-flex align-items-center">
                <SocialIcon />
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
    margin: 0 5px;
}
</style>